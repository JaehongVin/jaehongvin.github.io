# @common/ui

모노레포 전역에서 사용하는 공유 UI 컴포넌트 라이브러리.

Radix UI 기반에 Tailwind CSS + CVA로 스타일링합니다.

## 컴포넌트

**Atoms** — 기본 단위

- `Avatar` — 프로필 이미지
- `Badge` — 라벨 뱃지
- `Button` — 버튼

**Molecules** — 조합 컴포넌트

- `Card` — 카드 (Header, Title, Description, Content, Footer)

**Organisms** — 복합 컴포넌트

- `Dialog` — 모달 다이얼로그
- `Dropdown` — 드롭다운 메뉴
- `Toast` — 토스트 알림
- `Tooltip` — 툴팁

## 사용법

```tsx
import { Button } from '@common/ui/atoms/Button';
import { Card } from '@common/ui/molecules/Card';
import { cn } from '@common/ui/lib/utils';
```

## 유틸리티

- `lib/utils.ts` — `cn()` 함수 (clsx + tailwind-merge)

## 스크립트

```bash
pnpm lint       # Biome 린트
pnpm typecheck  # 타입 검사
pnpm compile    # 타입 검사 + 린트
```
