import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

/**
 * * 전역 eslint 설정
 */
export const config = [
  //* JavaScript 기본 권장 규칙
  js.configs.recommended,

  //* Prettier와 충돌하는 ESLint 규칙 비활성화
  eslintConfigPrettier,

  //* TypeScript 권장 규칙 적용
  ...tseslint.configs.recommended,

  //* Turborepo 관련 규칙 설정
  {
    plugins: {
      //* turbo 플러그인
      turbo: turboPlugin,
    },
    rules: {
      //* 선언되지 않은 환경 변수 사용시 경고
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },

  {
    plugins: {
      //* 모든 ESLint 에러를 경고로 변환
      onlyWarn,
    },
  },

  //* dist 폴더 내 파일들은 린트 검사에서 제외
  {
    ignores: ['dist/**'],
  },
];
