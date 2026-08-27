---
name: common-ui-package
description: 공통 UI 패키지(@common/ui)의 Atomic Design 구조(atoms/molecules/organisms), exports 기반 임포트 경로, cva+cn 컴포넌트 작성 패턴과 의존성 버전. @common/ui 컴포넌트를 추가·수정하거나 앱에서 임포트할 때 사용.
---

`packages/ui`(`@common/ui`)는 모든 앱이 공유하는 UI 패키지다.

### Atomic Design 구조

컴포넌트는 `src/components/` 아래 3단계로 분류한다.

| 계층 | 기준 | 현재 구성 |
|------|------|-----------|
| `atoms/` | 더 쪼갤 수 없는 최소 단위. 자체 상태 없음 | `Avatar`, `Badge`, `Button` |
| `molecules/` | atom 조합. 하나의 UI 덩어리 | `Card` |
| `organisms/` | 상호작용·상태를 가진 복합 컴포넌트 (주로 Radix 래핑) | `Dialog`, `Dropdown`, `Toast`, `Tooltip` |

> ⚠️ 새 컴포넌트를 `@common/ui`에 넣기 전에 **정말 모든 앱에서 공통으로 쓰이는지** 먼저 판단한다. (Colocation 규칙 참고)

### 임포트 경로

`package.json`의 `exports`가 계층별로 열려 있으므로 **계층 이름을 경로에 포함**한다.

```typescript
//* 컴포넌트 - 계층 경로 사용
import { Badge } from '@common/ui/atoms/Badge';
import { Card, CardContent } from '@common/ui/molecules/Card';
import { Dialog, DialogContent } from '@common/ui/organisms/Dialog';

//* 유틸리티
import { cn } from '@common/ui/lib/utils';

//* 스타일 (globals.css에서 @import)
import '@common/ui/common.css';
```

```typescript
//* ❌ 존재하지 않는 경로 - exports에 없어 해석 실패
import { Badge } from '@common/ui/components/Badge';
```

### 컴포넌트 작성 패턴

variant가 있는 컴포넌트는 `cva`로 변형을 정의하고, `cn`으로 병합한 뒤, variants·컴포넌트·타입을 함께 named export 한다.

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = cva('inline-flex items-center font-500', {
  variants: {
    variant: { default: 'bg-gray-800 text-white', outline: 'border text-gray-500' },
    size: { sm: 'rounded-px-4 px-6 text-px-11', md: 'rounded-px-6 px-8 text-px-12' },
  },
  defaultVariants: { variant: 'default', size: 'md' },
});

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, size, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
);

export { Badge, badgeVariants };
export type { BadgeProps };
```

규칙:

- `className`은 항상 props로 받아 `cn()` 마지막에 병합 (호출부 오버라이드 허용)
- `ref`는 React 19 방식대로 **props로 선언**한다: `interface Props { ref?: Ref<HTMLDivElement> }`. `forwardRef` 사용 금지
- Radix 래핑 컴포넌트는 파일 최상단에 `'use client'`
- `default export` 금지. named export만 사용

### cn 유틸리티

`src/lib/utils.ts`의 `cn`은 `clsx` + `extendTailwindMerge` 조합이다. 이 프로젝트의 `-px-*` 커스텀 유틸리티(`text-px-*`, `gap-px-*` 등)가 classGroup으로 등록돼 있어 충돌 시 올바르게 병합된다.

> 새로운 `-px-*` 유틸리티를 `common.css`에 추가하면 `utils.ts`의 `classGroups`에도 등록해야 병합이 동작한다.

### 의존성 버전

| 패키지 | 버전 |
|--------|------|
| @radix-ui/react-dialog | 1.1.15 |
| @radix-ui/react-dropdown-menu | 2.1.16 |
| @radix-ui/react-toast | 1.2.15 |
| @radix-ui/react-tooltip | 1.2.8 |
| class-variance-authority | 0.7.1 |
| clsx | 2.1.1 |
| tailwind-merge | 3.2.0 |
| pretendard | 1.3.9 |

### 검증

```bash
pnpm compile:common-ui   # typecheck + lint
```
