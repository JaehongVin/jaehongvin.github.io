# @common/typescript-config

모노레포 전역에서 사용하는 공유 TypeScript 설정.

## 설정 파일

| 파일 | 용도 |
|------|------|
| `base.json` | 기본 설정 (모든 패키지 공통) |
| `nextjs.json` | Next.js 앱용 |
| `react-library.json` | React 라이브러리 패키지용 |

## 사용법

각 패키지의 `tsconfig.json`에서 extends로 참조합니다.

```json
{
  "extends": "@common/typescript-config/nextjs.json"
}
```
