import { config } from '@common/eslint-config/next-js';

export default [
  //* .next 빌드 폴더 무시
  { ignores: ['.next/**'] },

  //* next.js 관련 설정
  ...config,
];
