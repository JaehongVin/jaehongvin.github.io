---
name: playwright-qa
description: UI 컴포넌트/스타일/레이아웃 변경 후 Playwright로 브라우저 QA를 수행하는 방법과 필요·불필요 기준. className, Tailwind 클래스, 새 컴포넌트, mdxComponents를 변경했을 때 사용.
---

UI 컴포넌트, 스타일, 레이아웃이 변경되는 작업 후에는 반드시 Playwright로 브라우저 QA를 수행한다.

### QA가 필요한 경우

- 컴포넌트 스타일 추가·수정 (className, Tailwind 클래스 변경)
- 새 컴포넌트 추가 또는 레이아웃 구조 변경
- MDX 렌더링 방식 변경 (mdxComponents 수정)

### QA가 불필요한 경우

- 콘텐츠(MDX 파일) 텍스트만 수정
- 타입, 유틸리티 함수, 데이터 로직 변경
- 패키지 설치·제거

### QA 방법

사용자가 로컬 dev 서버를 이미 띄워놓고 있으므로, **자체 서버를 별도로 띄우지 않는다.** 사용자 서버의 포트(기본 3000)를 그대로 사용해 Playwright로 스크린샷을 찍어 확인한다.

> ⚠️ 부득이하게 자체 서버를 띄워야 하는 경우, 사용자 서버와 충돌하지 않도록 **기본 포트(3000)가 아닌 다른 포트**를 사용한다.

```bash
# Playwright 스크린샷 예시
npx playwright screenshot --browser chromium "http://localhost:3000/target-page" /path/to/screenshot.png
```
