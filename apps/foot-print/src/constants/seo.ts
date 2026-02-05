import type { Metadata } from 'next';

export const DEFAULT_META_DATA = {
  title: {
    default: '흔한 개발자의 발자취',
    template: '%s | 발자취',
  },
  description: '개발자 빈재홍의 기술 블로그입니다.',
  keywords: [
    '프론트엔드',
    '개발자',
    '블로그',
    'React',
    'Next.js',
    'TypeScript',
    '웹 개발',
    '빈재홍',
  ],
  authors: [{ name: '빈재홍' }],
  creator: '빈재홍',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '흔한 개발자의 발자취',
    title: '흔한 개발자의 발자취',
    description:
      '프론트엔드 개발자 빈재홍의 기술 블로그입니다. 웹 개발, React, Next.js, TypeScript 등 프론트엔드 기술을 기록합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '흔한 개발자의 발자취',
    description:
      '프론트엔드 개발자 빈재홍의 기술 블로그입니다. 웹 개발, React, Next.js, TypeScript 등 프론트엔드 기술을 기록합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/icons/logo.svg',
  },
} satisfies Metadata;
