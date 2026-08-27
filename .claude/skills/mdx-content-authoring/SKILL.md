---
name: mdx-content-authoring
description: content/posts, content/notes MDX의 frontmatter 스키마(title/description/date/category/tags)와 본문 규칙(h2/h3만 TOC 대상). 새 포스트·노트 MDX를 작성하거나 mdxComponents를 수정할 때 사용.
---

포스트(`content/posts/*.mdx`)와 노트(`content/notes/*.mdx`)는 동일한 frontmatter 스키마를 사용한다. (`src/types/post.ts`의 `PostMeta`, `src/utils/mdx.ts` 참고)

### Frontmatter

```mdx
---
title: "제목"
description: "목록/메타 태그에 노출되는 요약"
date: "2025-11-04"
category: "DX"
tags: ["태그1", "태그2"]
---
```

- `date`는 `YYYY-MM-DD` 형식 고정 — `getAllContent`가 이 값 기준으로 최신순 정렬
- `slug`는 파일명에서 자동 추출됨 → 파일명이 곧 URL 경로 (`dependency-diet.mdx` → `/posts/dependency-diet`)
- `tags`는 빈 배열도 허용되지만, 필터링 UI에서 사용되므로 가능하면 채울 것

### 본문 작성 규칙

- `h2`, `h3`에만 커스텀 스타일과 자동 `id`(slugify)가 적용됨 — 목차(TOC)는 `h2`/`h3`만 추출하므로 본문 구조는 이 두 레벨로 구성할 것
- 새로운 마크다운 요소(예: 커스텀 컴포넌트)를 렌더링하려면 `src/components/mdx/index.tsx`의 `mdxComponents`에 추가
