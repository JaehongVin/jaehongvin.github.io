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