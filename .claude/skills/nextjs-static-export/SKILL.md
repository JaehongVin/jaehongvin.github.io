---
name: nextjs-static-export
description: foot-print 앱은 output:'export'로 GitHub Pages에 배포되므로 API Routes·searchParams(서버)·ISR 등을 쓸 수 없음. 이미지 최적화 제약, 데이터 페칭·동적 라우트 패턴 정리. 정적 export와 충돌 가능한 코드를 작성하기 전에 사용.
---

> ⚠️ `foot-print` 앱은 GitHub Pages에 배포되므로 `output: 'export'` 설정이 적용됨

### 사용 가능한 기능

- Server Components (빌드 시점에 실행)
- `generateStaticParams` (동적 라우트 정적 생성)
- `fs` 모듈로 파일 읽기 (빌드 시점)
- Client Components (`'use client'`)

### 사용 불가능한 기능

- API Routes (`app/api/`)
- `searchParams` in Server Components (빌드 시점에 알 수 없음)
- `next.config.js`의 `redirects`, `rewrites` (서버 필요)
- ISR (Incremental Static Regeneration)
- Dynamic rendering (`force-dynamic`)

### 이미지 최적화

> ⚠️ `next.config.ts`에서 `images.unoptimized: true`로 설정되어 있음 (정적 export는 Next.js 이미지 최적화 서버를 사용할 수 없기 때문)

- `next/image`는 그대로 사용 — `width`/`height` 기반 레이아웃, lazy loading 등의 이점은 유지됨
- 단, 리사이징·포맷 변환이 빌드/런타임에 자동으로 일어나지 않으므로 **원본 이미지를 사용할 크기에 맞게 미리 준비**할 것
- 아이콘처럼 색상·구조를 코드로 제어해야 하면 `@svgr/webpack`으로 SVG를 React 컴포넌트로 임포트, 그 외 정적 이미지는 `/public` 경로 + `next/image` 사용

```tsx
import Image from 'next/image';

<Image src="/assets/icons/logo.svg" alt="발자취 로고" width={16} height={16} />
```

### 코드 작성 시 주의사항

```tsx
// ❌ 잘못된 예: Server Component에서 searchParams 사용
export default async function Page({ searchParams }) {
  const { category } = await searchParams; // 정적 빌드 시 작동 안함
}

// ✅ 올바른 예: Client Component에서 useSearchParams 사용
'use client';
import { useSearchParams } from 'next/navigation';

export function FilteredList() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  // 클라이언트에서 URL 파라미터 읽기
}
```

### 데이터 페칭 패턴

```tsx
// Server Component에서 빌드 시점에 데이터 fetch
export default async function Page() {
  const posts = await getAllPosts(); // 빌드 시 실행

  return (
    <Suspense fallback={null}>
      <ClientFilter posts={posts} /> {/* 데이터를 props로 전달 */}
    </Suspense>
  );
}
```

### 동적 라우트

```tsx
// [slug]/page.tsx
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug })); // 빌드 시 모든 경로 생성
}
```
