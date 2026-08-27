#!/usr/bin/env node
//* Stop 훅: 코드 변경이 있으면 검증 서브에이전트를 실행하도록 요청한다.
//*   .ts/.tsx/.css 변경 -> code-reviewer
//*   .tsx/.css 변경     -> ui-qa 추가
//* 같은 변경 상태를 두 번 검증하지 않도록 세션별 마커로 중복을 차단한다.
//* 어떤 이유로든 실패하면 조용히 통과시킨다 (턴이 막히는 것이 검증을 놓치는 것보다 나쁘다).

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const REVIEW_TARGETS = ['*.ts', '*.tsx', '*.css'];
const UI_EXTENSIONS = ['.tsx', '.css'];

const git = (args, cwd) =>
  execFileSync('git', args, { cwd, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });

const readStdin = () => {
  try {
    return JSON.parse(readFileSync(0, 'utf8'));
  } catch {
    return {};
  }
};

const buildReason = (files, needsUiQa) => {
  const agents = needsUiQa
    ? 'Agent 툴로 "code-reviewer"와 "ui-qa"를 한 메시지에서 병렬로 실행하라.'
    : 'Agent 툴로 subagent_type "code-reviewer"를 실행하라.';

  return [
    `코드 변경이 감지되었다. ${agents}`,
    '결과를 사용자에게 한국어로 요약 보고하고 종료하라.',
    'Critical 지적이나 레이아웃 문제가 있으면 직접 고치지 말고 수정 여부를 사용자에게 물어라.',
    '검증은 이번 턴에 한 번만 수행한다.',
    '',
    '변경 파일:',
    files,
  ].join('\n');
};

const main = () => {
  const input = readStdin();

  //* 이미 Stop 훅 때문에 이어서 도는 중이면 즉시 통과 (무한 루프 방지)
  if (input.stop_hook_active === true) return;

  const cwd =
    process.env.CLAUDE_PROJECT_DIR ?? git(['rev-parse', '--show-toplevel'], process.cwd()).trim();

  const status = git(['status', '--porcelain', '--', ...REVIEW_TARGETS], cwd).trim();
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
  const marker = join(tmpdir(), `claude-review-${input.session_id ?? 'nosession'}`);
  if (existsSync(marker) && readFileSync(marker, 'utf8') === digest) return;
  writeFileSync(marker, digest);

  const needsUiQa = changed.some((file) => UI_EXTENSIONS.some((ext) => file.endsWith(ext)));

  process.stdout.write(
    JSON.stringify({ decision: 'block', reason: buildReason(changed.join('\n'), needsUiQa) }),
  );
};

try {
  main();
} catch {
  //* 통과
}
