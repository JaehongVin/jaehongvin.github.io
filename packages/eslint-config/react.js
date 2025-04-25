import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import { config as baseConfig } from './base.js';

/**
 * * react.js 관련 설정
 */
export const config = [
  //* 기본 ESLint 설정 확장
  ...baseConfig,

  //* React 권장 설정 적용
  pluginReact.configs.flat.recommended,

  {
    //* 언어 옵션 설정
    languageOptions: {
      //* React 권장 언어 옵션 확장
      ...pluginReact.configs.flat.recommended.languageOptions,
      //* 전역 변수 설정
      globals: {
        //* Service Worker 관련 전역 변수
        ...globals.serviceworker,
        //* 브라우저 관련 전역 변수
        ...globals.browser,
      },
    },
  },

  {
    //* ESLint 플러그인 설정
    plugins: {
      //* React Hooks 플러그인 추가
      'react-hooks': pluginReactHooks,
    },
    //* React 설정
    settings: {
      //* React 버전 자동 감지
      react: { version: 'detect' },
    },
    //* ESLint 규칙 설정
    rules: {
      //* React Hooks 권장 규칙 적용
      ...pluginReactHooks.configs.recommended.rules,
      //* React import 구문 필수 규칙 비활성화
      'react/react-in-jsx-scope': 'off',
    },
  },
];
