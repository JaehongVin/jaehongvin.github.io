---
name: nextjs-route-special-files
description: Next.js App Router의 error.tsx('use client', reset 버튼)·not-found.tsx(서버 컴포넌트, 홈 링크) 작성 컨벤션. 에러 바운더리나 404 페이지를 새로 만들거나 수정할 때 사용.
---

Next.js App Router의 `error.tsx`, `not-found.tsx` 컨벤션을 따른다. (`src/app/error.tsx`, `src/app/not-found.tsx` 참고)

### error.tsx

- 에러 바운더리이므로 반드시 `'use client'`
- `error: Error & { digest?: string }`, `reset: () => void`를 props로 받음
- `reset()`을 호출하는 재시도 버튼 제공

```tsx
'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  //* ...
};

export default ErrorPage;
```

### not-found.tsx

- 클라이언트 전용 API가 필요 없으므로 서버 컴포넌트로 작성
- 홈으로 돌아가는 `<Link>` 제공

> ⚠️ 필요 시 같은 라우트 세그먼트에 `loading.tsx`를 추가해 로딩 UI를 정의할 수 있다 (현재 프로젝트에는 아직 없음)
