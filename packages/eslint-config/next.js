import pluginNext from '@next/eslint-plugin-next';
import { config as baseConfig } from './base.js';
import { config as reactConfig } from './react.js';

/**
 * * next.js 관련 설정
 */
export const config = [
  //* 전역 ESLint 설정
  ...baseConfig,

  //* React 관련 설정
  ...reactConfig,

  {
    //* Next.js 플러그인 설정
    plugins: {
      //* Next.js ESLint 플러그인 추가
      '@next/next': pluginNext,
    },
    //* Next.js 관련 규칙 설정
    rules: {
      //* Next.js 권장 규칙 적용
      ...pluginNext.configs.recommended.rules,
      //* Core Web Vitals 관련 규칙 적용
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
];
