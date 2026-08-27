---
name: web-accessibility
description: 시맨틱 태그 선택 기준, 아이콘 버튼·링크의 sr-only/aria-label 패턴, Radix 다이얼로그 접근성, 키보드·포커스·색상 대비 규칙. JSX 마크업을 작성하거나 인터랙티브 UI를 만들 때 사용.
---

### 시맨틱 태그

`<div>` 대신 의미에 맞는 태그를 쓴다. 페이지당 `<main>`은 하나.

| 태그 | 용도 | 프로젝트 예시 |
|------|------|---------------|
| `<header>` | 사이트/섹션 머리말 | `components/Header.tsx`, 상세 페이지 제목 블록 |
| `<nav>` | 네비게이션 링크 묶음 | Header의 메뉴, MobileMenu의 링크 목록 |
| `<main>` | 페이지 주 콘텐츠 (페이지당 1개) | 각 `page.tsx`, `DetailLayout.tsx` |
| `<article>` | 독립적으로 의미가 성립하는 콘텐츠 | `ContentDetailPage.tsx`, 포스트 카드 |
| `<aside>` | 보조 콘텐츠 | `LeftSidebar.tsx`, `RightSidebar.tsx` |
| `<section>` | 제목을 가진 논리적 구획 | 포트폴리오의 각 영역 |

목록은 `<ul>`/`<li>`로 감싼다. 클릭 가능한 요소는 이동이면 `<a>`/`<Link>`, 동작이면 `<button type="button">`을 쓴다. `onClick`을 단 `<div>`는 금지.

### 아이콘 전용 버튼·링크

시각적 텍스트가 없는 요소에는 **접근 가능한 이름을 반드시 제공**하고, 장식용 SVG/이미지는 접근성 트리에서 제외한다.

```tsx
//* 패턴 A - sr-only 텍스트 (Header.tsx의 GitHub 링크)
<a href="https://github.com/..." target="_blank" rel="noopener noreferrer external">
  <span className="sr-only">GitHub</span>
  <svg aria-hidden="true" ...>...</svg>
</a>

//* 패턴 B - aria-label (MobileMenu.tsx의 메뉴 버튼)
<button type="button" aria-label="메뉴 열기">
  <svg aria-hidden="true" ...>...</svg>
</button>
```

- 의미 없는 장식 요소: `aria-hidden="true"` (구분자 `·`, 레이아웃용 spacer, 아이콘)
- 의미 있는 이미지: `<Image alt="발자취 로고" />` — 장식이면 `alt=""`
- `target="_blank"`에는 항상 `rel="noopener noreferrer"`

### Radix 컴포넌트

`@common/ui/organisms/*`의 Radix 기반 컴포넌트는 포커스 트랩·ESC 닫기·`aria-*`를 자체 처리한다. 대신 **필수 슬롯을 비우면 경고가 발생**한다.

```tsx
//* 시각적 제목이 없어도 DialogTitle은 반드시 렌더링 (MobileMenu.tsx)
<DialogContent>
  <DialogTitle className="sr-only">메뉴</DialogTitle>
  ...
</DialogContent>
```

트리거를 커스텀 요소로 바꿀 땐 `asChild`를 써서 Radix가 붙이는 접근성 속성을 유지한다.

### 키보드 · 포커스

- 모든 인터랙티브 요소는 Tab으로 도달 가능해야 한다. `tabIndex={-1}`로 흐름에서 빼지 않는다
- 포커스 링을 `outline-none`으로 지울 경우 **반드시 대체 표시를 제공**한다 (`focus-visible:ring-2` 등)
- hover에만 반응하는 UI는 만들지 않는다. hover로 드러나는 요소는 focus로도 드러나야 한다

```tsx
//* ❌ 포커스 표시가 사라짐
className="outline-none"

//* ✅ 대체 표시 제공
className="outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
```

### 폼 · 색상 대비

- 모든 입력 필드는 `<label htmlFor>`로 연결한다. 시각적 레이블이 없으면 `sr-only` 레이블을 쓴다
- 본문 텍스트는 배경 대비 **4.5:1**, 큰 텍스트·UI 경계는 **3:1** 이상 (WCAG AA)
- `text-gray-400` 이하의 옅은 회색을 흰 배경 본문에 쓰지 않는다. 보조 텍스트는 `text-gray-500`을 하한으로 본다
- 정보를 색상만으로 전달하지 않는다 (상태는 아이콘·텍스트를 함께)

### 확인 방법

UI 변경 후에는 `playwright-qa` 스킬의 절차대로 브라우저에서 확인하고, 키보드 Tab 이동만으로 주요 동선(네비게이션, 메뉴 열기·닫기)이 가능한지 함께 점검한다.
