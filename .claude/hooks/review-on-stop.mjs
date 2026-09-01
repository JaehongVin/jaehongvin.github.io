#!/usr/bin/env node
//* Stop 훅: 코드/콘텐츠 변경을 감지해 검증 서브에이전트를 실행하도록 요청한다.
//*   .ts/.tsx/.css 변경                  -> code-reviewer
//*   .tsx/.css 변경                      -> ui-qa 추가
//*   content/posts, content/notes 변경   -> code-reviewer (컨벤션 검증)
//*
//* critical이 발견되면 메인 에이전트는 직접 고치지 않고 code-writer/mdx-writer에게
//* 수정을 위임한 뒤 재검증받는다. diff 지문이 바뀔 때만 다시 걸고, 상한(MAX_ROUNDS)을 둬
//* 무한 루프를 막는다. 지문이 안 바뀌면(이미 검증한 상태) 몇 번을 다시 멈추려 해도 통과시킨다 —
//* 이게 background 서브에이전트 완료 알림으로 턴이 여러 번 쪼개지는 것과도 무관하게 동작한다.
//* 어떤 이유로든 실패하면 조용히 통과시킨다 (턴이 막히는 것이 검증을 놓치는 것보다 나쁘다).

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CODE_TARGETS = ['*.ts', '*.tsx', '*.css'];
const CONTENT_TARGETS = [
  'apps/foot-print/content/posts/*.mdx',
  'apps/foot-print/content/notes/*.mdx',
];
const REVIEW_TARGETS = [...CODE_TARGETS, ...CONTENT_TARGETS];
const UI_EXTENSIONS = ['.tsx', '.css'];
const MAX_ROUNDS = 3;
//* 이 시간 안에 이어진 변경만 "같은 수정 사이클"로 보고 라운드를 누적한다.
//* 넘기면 별개의 새 작업으로 취급해 라운드를 리셋한다 (그래야 예전 라운드가 쌓여
//* 몇 시간 뒤의 무관한 새 작업까지 상한에 걸려 검증을 건너뛰는 걸 막는다).
const ROUND_RESET_MS = 15 * 60 * 1000;

const git = (args, cwd) =>
  execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
  });

const readStdin = () => {
  try {
    return JSON.parse(readFileSync(0, 'utf8'));
  } catch {
    return {};
  }
};

const isContentFile = (file) =>
  file.startsWith('apps/foot-print/content/posts/') ||
  file.startsWith('apps/foot-print/content/notes/');

const readMarker = (path) => {
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
};

const buildReason = ({
  changed,
  needsUiQa,
  hasCode,
  hasContent,
  round,
  isLastRound,
}) => {
  const header =
    round === 1
      ? '코드/콘텐츠 변경이 감지되었다.'
      : `${round - 1}차 수정에 대한 재검증이 필요하다.`;

  const reviewStep = needsUiQa
    ? 'Agent 툴로 "code-reviewer"와 "ui-qa"를 한 메시지에서 병렬로, foreground로(run_in_background: false) 실행하라.'
    : 'Agent 툴로 subagent_type "code-reviewer"를 foreground로(run_in_background: false) 실행하라.';

  const delegateTargets = [];
  if (hasCode)
    delegateTargets.push('코드(.ts/.tsx/.css) 수정 -> "code-writer"');
  if (hasContent)
    delegateTargets.push(
      'content/posts, content/notes의 .mdx 수정 -> "mdx-writer"',
    );

  const closing = isLastRound
    ? [
        `이번이 마지막 자동 재검증이다 (상한 ${MAX_ROUNDS}회).`,
        ...(hasCode
          ? [
              '코드 문제가 지금까지 반복해서 안 고쳐졌다면, "code-writer"를 또 부르지 말고 먼저 Agent 툴로 "debugger"를 실행해 근본 원인을 특정하라.',
              'debugger가 원인을 찾으면 그 결과를 그대로 "code-writer"에게 넘겨 수정하게 하라.',
            ]
          : []),
        '위임해서 고친 뒤에도 critical이 남아 있으면 더 반복하지 말고, 남은 문제를 사용자에게 한국어로 보고하고 종료하라.',
      ]
    : [
        'critical 지적이나 레이아웃 문제가 있으면 절대 네가 직접 Write·Edit 하지 말고, 아래 대상에게 Agent 툴로 위임하라:',
        ...delegateTargets.map((line) => `  - ${line}`),
        '위임한 서브에이전트도 foreground로 실행해 수정 완료를 확인한 뒤 다음 행동을 이어가라.',
        '수정이 끝나면 평소처럼 턴을 종료하면 된다 — 변경된 부분이 있으면 자동으로 다시 검증된다.',
      ];

  return [
    header,
    reviewStep,
    ...closing,
    '검증 결과는 매 라운드 사용자에게 한국어로 요약 보고한다.',
    '',
    '변경 파일:',
    changed.join('\n'),
  ].join('\n');
};

const main = () => {
  const input = readStdin();

  const cwd =
    process.env.CLAUDE_PROJECT_DIR ??
    git(['rev-parse', '--show-toplevel'], process.cwd()).trim();

  const status = git(
    ['status', '--porcelain', '--', ...REVIEW_TARGETS],
    cwd,
  ).trim();
  if (!status) return;

  const changed = status.split('\n').map((line) => line.slice(3));

  //* 추적 중인 변경은 diff로, 추적 안 되는 새 파일은 내용으로 지문을 만든다
  const untracked = status
    .split('\n')
    .filter((line) => line.startsWith('??'))
    .map((line) => line.slice(3));
  const fingerprint = [
    status,
    git(['diff', 'HEAD', '--', ...REVIEW_TARGETS], cwd),
    ...untracked.map((file) => readFileSync(join(cwd, file), 'utf8')),
  ].join('\n');

  const digest = createHash('sha1').update(fingerprint).digest('hex');
  const markerPath = join(
    tmpdir(),
    `claude-review-${input.session_id ?? 'nosession'}`,
  );
  const marker = readMarker(markerPath);

  //* 이전에 검증한 것과 같은 상태면 몇 번을 다시 멈추려 해도 통과시킨다
  if (marker?.digest === digest) return;

  const now = Date.now();
  const sameCycle = marker && now - marker.ts <= ROUND_RESET_MS;
  const round = sameCycle ? marker.round + 1 : 1;
  writeFileSync(markerPath, JSON.stringify({ digest, round, ts: now }));

  //* 상한을 넘겼으면 직전 라운드에서 이미 "보고하고 종료" 지시를 내렸으니 더 막지 않는다
  if (round > MAX_ROUNDS) return;

  const needsUiQa = changed.some((file) =>
    UI_EXTENSIONS.some((ext) => file.endsWith(ext)),
  );
  const hasCode = changed.some((file) => !isContentFile(file));
  const hasContent = changed.some(isContentFile);

  process.stdout.write(
    JSON.stringify({
      decision: 'block',
      reason: buildReason({
        changed,
        needsUiQa,
        hasCode,
        hasContent,
        round,
        isLastRound: round === MAX_ROUNDS,
      }),
    }),
  );
};

try {
  main();
} catch {
  //* 통과
}
