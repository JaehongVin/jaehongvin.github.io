# 흔한 개발자의 발자취

개인 포트폴리오 모노레포. 블로그를 포함한 여러 앱과 공유 패키지를 관리합니다.

> https://jaehongvin.github.io

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (Static Export) |
| 언어 | TypeScript 5.9 |
| 스타일링 | Tailwind CSS 4 |
| 콘텐츠 | MDX + next-mdx-remote |
| UI 컴포넌트 | Radix UI + CVA |
| 모노레포 | pnpm Workspaces + Turborepo |
| 코드 품질 | Biome + Husky |
| 배포 | GitHub Actions → GitHub Pages |

## 프로젝트 구조

```
├── apps/
│   └── foot-print/              # 메인 블로그 앱
│       ├── content/posts/       # MDX 포스트 파일
│       ├── src/
│       │   ├── app/             # Next.js App Router
│       │   │   └── posts/
│       │   │       ├── (list)/  # 포스트 목록
│       │   │       └── [slug]/  # 포스트 상세
│       │   ├── components/      # 앱 전용 컴포넌트
│       │   ├── utils/           # MDX 파싱 유틸
│       │   └── constants/       # SEO 등 상수
│       └── public/assets/       # 정적 리소스
│
├── packages/
│   ├── ui/                      # 공유 UI 라이브러리 (@common/ui)
│   │   └── src/components/
│   │       ├── atoms/           # Avatar, Badge, Button
│   │       ├── molecules/       # Card
│   │       └── organisms/       # Dialog, Dropdown, Toast, Tooltip
│   └── typescript-config/       # 공유 TS 설정
│
└── .github/workflows/           # CI/CD 파이프라인
```

## 시작하기

```bash
# Node.js 24.13.0 필요 (.nvmrc)
nvm use

# 의존성 설치
pnpm install

# 개발 서버 (localhost:3000)
pnpm dev:foot-print
```

## 주요 스크립트

```bash
pnpm dev:foot-print        # 개발 서버
pnpm build:foot-print      # 정적 빌드 (out/ 생성)
pnpm lint:foot-print       # Biome 린트
pnpm typecheck:foot-print  # 타입 검사
pnpm format:foot-print     # 코드 포맷팅
pnpm clean                 # .turbo, .next, node_modules 삭제
```

## 글 작성

`apps/foot-print/content/posts/` 에 MDX 파일을 추가하면 됩니다.

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

파일명이 URL 슬러그로 사용됩니다. (예: `my-post.mdx` → `/posts/my-post`)

## 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.

```
feature 브랜치 → PR → main 머지 → 자동 배포
```
