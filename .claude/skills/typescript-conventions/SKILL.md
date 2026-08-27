---
name: typescript-conventions
description: Arrow Function 강제(예외 포함), 타입 추론 우선, 객체 타입은 interface(type을 쓸 조건), 상수는 as const + typeof 타입 추출 규칙과 ✅/❌ 예시. .ts/.tsx 코드를 작성하거나 리뷰할 때 사용.
---

CLAUDE.md의 TypeScript 규칙에 대한 상세 예시와 판단 기준이다.

### 함수 선언 — Arrow Function

> ⚠️ 특별한 이유가 없으면 항상 **Arrow Function**

```tsx
//* ✅ 권장
const handleClick = () => { ... };
const formatDate = (date: Date) => { ... };
export const MyComponent = () => { ... };

//* ❌ 지양
function handleClick() { ... }
export default function MyComponent() { ... }
```

**예외 (`function` 키워드 허용):**

- `generateStaticParams`, `generateMetadata`, `generateViewport` 등 Next.js 규약 함수

컴포넌트는 `default export` 대신 named export를 기본으로 한다. 단 `page.tsx`, `layout.tsx`, `error.tsx` 등 Next.js가 default export를 요구하는 라우트 특수 파일은 예외다.

### 타입 추론 우선

> ⚠️ TypeScript가 추론할 수 있는 타입은 **명시하지 않는다**

```tsx
//* ✅ 권장 - 추론에 맡기기
const count = 0;
const posts = await getAllPosts();
const handleClick = () => { ... };

//* ❌ 지양 - 불필요한 타입 명시
const count: number = 0;
const posts: Post[] = await getAllPosts();
const handleClick: () => void = () => { ... };
```

**타입을 명시해야 하는 경우:**

- 함수 파라미터 (추론 불가)
- 빈 배열·객체 초기화: `const items: Item[] = []`
- 타입 단언이 필요한 경우
- 외부에 노출되는 API (export된 함수의 반환 타입 등)

### 객체 타입은 interface

> ⚠️ 객체 타입 정의는 **`interface`를 기본**으로 사용한다

`interface`는 flat 객체 타입을 만들고 캐싱되어 타입 체크 성능이 좋다. `type &`(intersection)은 매번 지연 병합되어 상대적으로 느리다.

```tsx
//* ✅ 권장
interface PostFilterProps {
  posts: PostMeta[];
}

//* ✅ 확장은 extends (src/types/post.ts)
interface Post extends PostMeta {
  content: string;
}

//* ✅ React 19 - ref는 props로 선언
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: Ref<HTMLButtonElement>;
}

//* ❌ 지양 - 객체 shape에 type
type PostFilterProps = {
  posts: PostMeta[];
};
```

**`type`을 사용해야 하는 경우:**

- 유니온 타입: `type Status = 'pending' | 'success'`
- 유틸리티·조건부 타입 조합: `type Keys = keyof typeof obj`
- `as const` 객체에서 타입 추출: `type Status = (typeof STATUS)[keyof typeof STATUS]`
- 리터럴 제약: `level: 2 | 3`

### 상수 정의

- **네이밍**: 대문자 스네이크 케이스 (`MAX_COUNT`, `SITE_URL`)
- **enum 스타일 상수**: `as const` 객체로 정의 (TS `enum` 사용 금지)
- **타입 추출**: `typeof` + 인덱스 접근

```typescript
const STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

type Status = (typeof STATUS)[keyof typeof STATUS];
//* 결과: 'pending' | 'success' | 'error'
```

매직 넘버·매직 스트링은 상수로 뽑고, 사용처가 한 라우트뿐이면 해당 라우트의 `_constants/`에 둔다 (`component-colocation` 스킬 참고).

### any 금지

`any` 대신 `unknown` + 좁히기, 제네릭, 또는 정확한 타입을 쓴다. 외부 라이브러리 타입이 없어 불가피한 경우에만 주석으로 이유를 남긴다.

### 검증

```bash
pnpm typecheck:foot-print   # tsc --noEmit
pnpm compile:foot-print     # typecheck + lint
```
