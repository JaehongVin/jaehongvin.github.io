import type { Metadata } from 'next';

export const SITE_URL = 'https://jaehongvin.github.io';
export const SITE_NAME = '흔한 개발자의 발자취';
export const SITE_DESCRIPTION =
  '프론트엔드 개발자 빈재홍의 기술 블로그입니다. 웹 개발, React, Next.js, TypeScript 등 프론트엔드 기술을 기록합니다.';

export const DEFAULT_META_DATA = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | 발자취',
  },
  description: SITE_DESCRIPTION,
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
  authors: [{ name: '빈재홍', url: SITE_URL }],
  creator: '빈재홍',
  publisher: '빈재홍',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Kbv2bBA2vhn3zFObG94eQVpttG3cxgwD-s46ofI4g8E',
  },
  icons: {
    icon: '/favicon.ico',
  },
} satisfies Metadata;
