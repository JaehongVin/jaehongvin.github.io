---
name: tailwind-px-conventions
description: 이 프로젝트의 px→rem 자동 변환, -px-* 커스텀 유틸리티(text-px-*, gap-px-* 등), breakpoint(tb/dt), root-font-size 동기화 규칙. 스타일·className 작성 시 참고.
---

### px → rem 자동 변환

이 프로젝트는 **px 값을 입력하면 rem으로 자동 변환**되도록 설정됨.

```tsx
// w-10 = 10px에 해당하는 rem 값 (약 0.833rem)
<div className="w-10 h-20 p-8" />
```

### 커스텀 유틸리티 (-px-* 시리즈)

`--spacing`이 적용되지 않는 속성들을 위한 유틸리티:

| 카테고리 | 유틸리티 | 예시 |
|----------|---------|------|
| Typography | `text-px-*`, `leading-px-*`, `tracking-px-*` | `text-px-14 leading-px-20` |
| Spacing | `gap-px-*`, `gap-x-px-*`, `gap-y-px-*` | `gap-px-10` |
| Position | `top-px-*`, `right-px-*`, `bottom-px-*`, `left-px-*`, `inset-px-*` | `top-px-20` |
| Sizing | `min-w-px-*`, `max-w-px-*`, `min-h-px-*`, `max-h-px-*`, `size-px-*` | `max-w-px-400` |
| Border | `rounded-px-*`, `border-px-*` | `rounded-px-8` |
| Effects | `blur-px-*` | `blur-px-4` |

### 기본 spacing으로 커버되는 것들

아래는 `-px-*` 없이 숫자만 쓰면 됨 (이미 px 기반):

- `w-*`, `h-*` (width, height)
- `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` (padding)
- `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*` (margin)
- `gap-*` (gap) - 단, `gap-px-*`도 제공됨

### Breakpoints

```css
--breakpoint-tb: 768px   /* 태블릿 */
--breakpoint-dt: 1280px  /* 데스크탑 */
```

```tsx
<div className="w-100 tb:w-200 dt:w-300" />
```

### root-font-size

- 기본값: `16px`
- `.vscode/settings.json`의 `tailwindCSS.rootFontSize`와 동기화 필요
- `common.css`의 `--root-font-size`와 동일하게 유지

### 설정 파일 위치

- `packages/ui/src/styles/common.css` - Tailwind 테마, 유틸리티 정의
- `.vscode/settings.json` - VSCode Tailwind IntelliSense 설정
