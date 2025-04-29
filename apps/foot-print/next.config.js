const nextConfig = {
  //* 리액트 엄격 모드
  reactStrictMode: true,

  //* 공통 모듈 트랜스파일
  transpilePackages: ['@common/ui'],

  turbopack: {
    //* svg 파일 react 컴포넌트로 사용 가능하도록
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  webpack: (config) => {
    //* svg 파일 react 컴포넌트로 사용 가능하도록
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
