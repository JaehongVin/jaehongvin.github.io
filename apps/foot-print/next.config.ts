import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  //* 빌드 시 정적 파일로 변환
  output: 'export',

  typedRoutes: true,

  images: {
    unoptimized: true,
  },

  //* 리액트 엄격 모드
  reactStrictMode: true,

  //* 공통 모듈 트랜스파일
  transpilePackages: ['@common/ui'],

  //* Turbopack 설정 (Next.js 16 기본 번들러)
  turbopack: {
    //* svg 파일 react 컴포넌트로 사용 가능하도록
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
