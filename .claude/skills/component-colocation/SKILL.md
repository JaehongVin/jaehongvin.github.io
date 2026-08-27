---
name: component-colocation
description: 새 컴포넌트·훅·상수 파일을 어디에 둘지 결정하는 규칙. 라우트 전용(_components) / 앱 공용(src/components) / 전 앱 공용(@common/ui) 판단 기준과 private folder(_) 사용법. 새 파일을 만들거나 컴포넌트를 옮길 때 사용.
---

> 관련된 코드는 사용하는 곳 가까이에 둔다.

### 배치 결정 규칙

**아래 순서대로 판단하고, 조건을 만족하는 첫 위치에 둔다.**

| 사용 범위 | 위치 | 예시 |
|-----------|------|------|
| 특정 라우트에서만 사용 | 해당 라우트 폴더의 `_components/`, `_hooks/`, `_constants/` | `app/portfolio/_components/CareerTimeline.tsx` |
| 같은 앱의 여러 라우트에서 공유 | `src/components/`, `src/hooks/`, `src/constants/` | `src/components/Header.tsx` |
| 모든 앱에서 공유 | `@common/ui` (Atomic Design 계층) | `packages/ui/src/components/atoms/Badge.tsx` |

핵심 원칙:

- **기본값은 가장 가까운 곳.** 두 번째 사용처가 생겼을 때 위로 올린다
- 재사용될 것 같다는 예상만으로 미리 올리지 않는다 (YAGNI)
- `@common/ui`로 올리는 건 **정말 앱 전체 공통일 때만**. 앱 도메인 지식(포스트, 노트 등)이 섞이면 올리지 않는다

### private folder (`_`)

`_`로 시작하는 폴더는 Next.js 라우팅에서 제외되므로, `app/` 안에 안전하게 코드를 둘 수 있다.

```
app/
├── portfolio/
│   ├── page.tsx
│   ├── _components/        # portfolio 전용 컴포넌트
│   ├── _hooks/             # portfolio 전용 훅
│   └── _constants/         # portfolio 전용 상수
└── notes/
    ├── (list)/page.tsx
    └── [slug]/page.tsx
```

> `(폴더)`는 route group(URL에 미포함), `_폴더`는 private folder(라우팅 제외)로 목적이 다르다. 코드 배치에는 `_`를 쓴다.

### 현재 앱 구조

`apps/foot-print/src`의 실제 배치:

```
src/
├── app/
│   ├── (home)/page.tsx
│   ├── notes/(list)/page.tsx, notes/[slug]/page.tsx
│   ├── posts/[slug]/page.tsx
│   └── portfolio/page.tsx
├── components/
│   ├── Header.tsx, MobileMenu.tsx      # 전역 레이아웃 공용
│   ├── content/                        # posts·notes 라우트가 함께 쓰는 컴포넌트
│   └── mdx/                            # MDX 렌더링 매핑
├── constants/
├── types/
└── utils/
```

`components/content/`처럼 **여러 라우트가 공유하는 묶음은 도메인 폴더로 그룹핑**한다. 반대로 한 라우트에서만 쓰는 컴포넌트가 `src/components/`에 있다면 해당 라우트의 `_components/`로 내린다.
