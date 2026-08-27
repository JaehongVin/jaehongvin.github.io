#!/usr/bin/env node
//* PreToolUse(Bash) 훅: 되돌리기 어렵거나 품질 게이트를 우회하는 명령을 차단한다.
//* deny 이므로 승인 없이 바로 막힌다. 의도한 작업이면 명령을 직접 수정해서 재시도해야 한다.
//* 평범한 git commit·push 는 막지 않는다. 그건 사용자가 직접 지시하는 작업이다.

import { readFileSync } from 'node:fs';

const RULES = [
  {
    pattern: /\bgit\s+push\b(?=.*(--force\b|--force-with-lease\b|\s-f\b))/,
    reason:
      'force push는 원격 히스토리를 덮어쓴다. main은 곧바로 GitHub Pages에 배포된다',
  },
  {
    pattern: /\bgit\s+commit\b(?=.*(--no-verify\b|\s-n\b))/,
    reason: 'pre-commit 검사(lint-staged)를 우회한다',
  },
  {
    pattern: /\bgit\s+reset\b(?=.*--hard\b)/,
    reason: '커밋되지 않은 작업이 사라진다',
  },
  {
    pattern: /\bgit\s+clean\b(?=.*\s-[a-zA-Z]*f)/,
    reason: '추적되지 않는 파일을 삭제한다. 되돌릴 수 없다',
  },
  {
    pattern:
      /\brm\s+(-[a-zA-Z]*\s+)*-[a-zA-Z]*r[a-zA-Z]*f|\brm\s+(-[a-zA-Z]*\s+)*-[a-zA-Z]*f[a-zA-Z]*r/,
    reason: '재귀 강제 삭제다',
  },
];

const main = () => {
  const input = JSON.parse(readFileSync(0, 'utf8'));
  const command = input.tool_input?.command;
  if (!command) return;

  const hit = RULES.find((rule) => rule.pattern.test(command));
  if (!hit) return;

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: `위험한 명령이라 차단했습니다: ${hit.reason}.\n\n  ${command}\n\n의도한 작업이면 명령을 직접 수정해서 다시 실행하세요.`,
      },
    }),
  );
};

try {
  main();
} catch {
  //* 판단 못 하면 통과시킨다. 훅 오류로 모든 Bash 를 막지 않는다
}
