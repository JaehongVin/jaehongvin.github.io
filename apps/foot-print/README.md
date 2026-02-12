# foot-print

개인 기술 블로그. Next.js 16 기반 정적 사이트로 GitHub Pages에 배포됩니다.

## 기술 스택

- **Next.js 16** — Static Export (`output: 'export'`)
- **MDX** — next-mdx-remote + rehype 플러그인
- **Tailwind CSS 4** — 스타일링
- **@common/ui** — 공유 UI 컴포넌트 패키지

## 디렉토리 구조

```
├── content/posts/          # MDX 포스트 파일
├── src/
│   ├── app/                # Next.js App Router
│   │   └── posts/
│   │       ├── (list)/     # 목록 페이지 + 사이드바(카테고리, 태그)
│   │       └── [slug]/     # 상세 페이지 + 사이드바(TOC)
│   ├── components/         # 앱 전용 컴포넌트 (Header, MDX 매핑)
│   ├── utils/mdx.ts        # MDX 파싱, TOC 추출, 포스트 조회
│   ├── constants/seo.ts    # SEO 메타데이터
│   └── types/post.ts       # 포스트 타입 정의
└── public/assets/          # 정적 리소스
```

## 스크립트

```bash
pnpm dev        # 개발 서버 (localhost:3000)
pnpm build      # 정적 빌드 → out/
pnpm lint       # Biome 린트
pnpm typecheck  # 타입 검사
pnpm compile    # 타입 검사 + 린트
```

## 글 작성

`content/posts/` 에 MDX 파일 추가. 파일명이 URL 슬러그가 됩니다.

```mdx
---
title: '제목'
description: '설명'
date: '2025-01-01'
category: '카테고리'
tags: ['태그1', '태그2']
---

본문 내용
```
