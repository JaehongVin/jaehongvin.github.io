export interface ExperienceHighlight {
  title: string;
  body: string;
}

export interface ExperienceTheme {
  name: string | null;
  highlights: ExperienceHighlight[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  context: string;
  themes: ExperienceTheme[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: '주식회사 웰로',
    role: 'Frontend Engineer',
    period: '2024.06 ‒ 2026.03',
    context:
      '누적 이용자 500만 규모의 공공·복지 서비스 운영사 · ISMS-P·CSAP 인증 대응 · Next.js(v14~16, App Router), TypeScript, Tailwind CSS, TanStack Query, TanStack Router, Zustand',
    themes: [
      {
        name: 'Engineering Leverage',
        highlights: [
          {
            title: '모노레포 AI 코딩 에이전트 하네스 설계',
            body: '에이전트 규칙을 루트·패키지별로 계층화해 소유 범위와 프론트엔드 컨벤션을 명시. 타입 검사·빌드를 실행 루프에 연결해 오류 수정과 재검증을 수행하도록 구성하고, 반복 오류를 규칙에 반영하며 운영.',
          },
          {
            title: 'AI 기반 에러 모니터링 자동화 파이프라인',
            body: 'Sentry 수동 확인과 에러 분석·티켓 작성·공유의 반복 작업을 줄이기 위해 자동화 파이프라인을 설계. Sentry Webhook·AWS Lambda·Claude API를 연결해 원인·심각도를 분류하고 Jira Epic별 티켓 생성과 Slack 알림을 자동화. POC를 팀에 제안해 정식 도입했으며, 에러 발생 30초 안에 분류된 티켓을 받도록 개선.',
          },
          {
            title: '코드 리뷰·품질 검사 자동화',
            body: '레거시 lint 오류 500여 건을 LLM으로 분류해 자동·수동 수정하고 Husky·lint-staged로 커밋 시 검사. Gemini API 기반 변경사항 분석을 GitLab CI에 연동해 컨벤션 위반과 잠재 버그 검토를 보조. Draft 제외·MR당 1회 실행으로 비용을 통제.',
          },
          {
            title: '3개 서비스가 공유하는 디자인 시스템',
            body: '웰로·웰로 비즈·고향사랑기부제가 공유하는 Atomic Design 기반 React 디자인 시스템을 담당. 디자이너와 공통 컴포넌트를 설계·개선하고, 디자인 토큰 기반 테마 관리와 WCAG 표준에 맞춘 접근성 개선을 수행.',
          },
          {
            title: 'Flutter 웹뷰 브릿지 모듈 관리',
            body: '앱과 웹 사이 통신 모듈을 웹 단에서 관리하며 window 객체 바인딩으로 히스토리 백 이슈를 해결하고, 네이티브 앱 상단 상태바 컨트롤과 햅틱 피드백 통신 로직을 추가. KB Pay 앱 웹뷰에서 서로 다른 서브도메인을 오가는 기부 플로우는 앱스킴을 정의하고 히스토리 동기화 브릿지를 만들어 끊김 없이 연결.',
          },
        ],
      },
      {
        name: 'Performance & Reliability',
        highlights: [
          {
            title: '상품 상세 페이지 렌더링 전략 재설계',
            body: '기존 ISR 갱신 주기가 가격·재고의 최신성 요구를 충족하지 못해 SSR과 스트리밍 렌더링으로 전환. 구매 결정에 필요한 정보는 먼저 제공하고, 상세 콘텐츠와 하단 섹션은 Suspense 경계로 분리해 느린 쿼리가 전체 렌더링을 지연하지 않도록 설계. 영상은 썸네일 선노출과 지연 로드를 적용하고, MP4를 WebM으로 자동 변환해 용량을 약 40% 줄임. 모바일 Lighthouse Performance 41→82점, FCP 3.2→1.2초, LCP 5.6→2.1초로 개선.',
          },
          {
            title: '멀티 프로세스 Route Cache 불일치 해결',
            body: 'PM2 cluster 환경에서 프로세스마다 Next.js Route Cache가 달라 사용자마다 다른 데이터가 보이는 문제를 해결. 커스텀 캐시 핸들러를 구현해 프로세스 간 캐시를 공유하고 동일한 데이터를 제공하도록 개선.',
          },
          {
            title: '사이트맵 생성 구조 개선과 빌드 최적화',
            body: '빌드마다 사이트맵 API를 120회 호출하면서 DB 커넥션 오류로 배포가 실패하던 문제를 해결. 백엔드·데브옵스와 협업해 백엔드 배치로 생성한 사이트맵을 S3에 올리고 CLI로 내려받는 구조로 전환. 배포 실패를 해소하고 빌드 시간을 1분 단축.',
          },
          {
            title: '번들 사이즈 최적화와 지속 관리 체계',
            body: 'React Swiper를 Embla로 교체하고 불필요한 의존성을 네이티브 API로 대체해 번들 140KB 감소. Yup을 Zod로 전환하고, knip으로 미사용 파일 130→6개, export 170→0개로 정리해 배포 시간을 36초 단축. 미사용 코드 검사를 CI에 연동해 지속적으로 관리.',
          },
        ],
      },
      {
        name: 'Product Engineering',
        highlights: [
          {
            title: '커머스 도메인 신규 구축 — 고향사랑기부제',
            body: '답례품 탐색·옵션 선택·결제까지 커머스 플로우의 프론트엔드 설계와 구현을 담당. 답례품·전시·이벤트 관리 및 반응형 화면을 개발하고, FlareLane(CRM)을 도입해 사용자 체류와 이탈 지점 분석 환경을 구축.',
          },
          {
            title: '공공인증 멀티스텝 신청 플로우',
            body: '서울특별시와 경기도가 서로 다른 인증 방식을 요구해 분기가 흩어지던 상황에서, 인증 연동을 스텝 단위로 추상화하고 상태 관리와 이탈 방지 로직을 한 곳으로 모음. 사용자가 웹앱을 벗어나지 않고 복지 정책을 바로 신청할 수 있게 함.',
          },
          {
            title: '기업 맞춤 사업 추천 플랫폼 구축 (wellobiz.com)',
            body: '기업 맞춤 사업 추천·구독 플랫폼을 개발하며 화면별 검색 필터를 서비스 전역 공용 컴포넌트로 통합. 여러 도메인의 API 응답을 클라이언트에서 조립하던 구조는 API Routes 기반 BFF를 직접 구현해 화면 단위 응답으로 통합.',
          },
          {
            title: '메인 서비스 홈 개편과 회원가입 이벤트 (welfarehello.com)',
            body: '홈·마이페이지 UI/UX와 정책 추천·바우처 도우미 기능을 개발. 회원가입 이벤트에 Matter.js와 framer-motion을 활용한 물리 기반 인터랙션을 구현.',
          },
        ],
      },
    ],
  },
  {
    company: '주식회사 비투지게임즈',
    role: 'Frontend Engineer',
    period: '2023.02 ‒ 2024.06',
    context: '판타지 스포츠 웹 게임 플랫폼 · Nuxt.js, TypeScript, Pinia',
    themes: [
      {
        name: null,
        highlights: [
          {
            title: '게임 핵심 경제 루프 개발',
            body: '경기별 라인업 제출, 선수 카드 업그레이드·거래 플로우와 상점·랭킹 페이지를 개발. Chart.js 기반 선수 통계 대시보드로 카드 가치 판단에 필요한 지표를 시각화.',
          },
          {
            title: '카드 무한 스크롤 렌더링 성능 개선',
            body: '애니메이션이 포함된 카드가 무한 스크롤에서 렌더링 부하를 일으켜 프레임 드랍이 발생하던 문제를 가상 스크롤(windowing) 적용으로 해소하고 대량 카드 렌더링 성능을 개선.',
          },
          {
            title: 'Vuex에서 Pinia로 선제 마이그레이션',
            body: 'Vuex의 TypeScript 연동 부담과 보일러플레이트를 줄이기 위해 프로젝트 초기에 Pinia로 전환. 이후 합류한 팀원이 별도 설정 없이 TypeScript를 사용할 수 있도록 하고 상태 관리 코드의 가독성을 개선.',
          },
        ],
      },
    ],
  },
  {
    company: '빈페이지(주)',
    role: 'Full-stack Engineer',
    period: '2020.10 ‒ 2022.07',
    context:
      '코딩 없이 홈페이지를 만드는 드래그앤드롭 웹 빌더 · Node.js, Express, jQuery, MySQL, AWS EC2',
    themes: [
      {
        name: null,
        highlights: [
          {
            title: '드래그앤드롭 웹 빌더 코어 개발',
            body: '코딩 없이 홈페이지를 제작하는 빌더의 JSON Schema 기반 동적 컴포넌트 렌더링 시스템을 개발. 에디터·프리뷰 실시간 동기화와 iframe 샌드박스를 통한 사용자 영역 격리를 구현.',
          },
          {
            title: '외부 서비스 연동 플러그인 아키텍처',
            body: '외부 연동을 플러그인 구조로 설계하고 OAuth 2.0 소셜 로그인 통합 모듈과 사방넷 연동을 개발. 인스타그램 게시글 동기화·카카오톡 채널·마케팅 픽셀도 같은 구조로 확장. 앱스토어 심사 정책 변경에 대응한 애플 로그인을 개발해 보류된 52건과 신규 13건의 심사를 일괄 처리.',
          },
          {
            title: '빌더 화면 성능 개선',
            body: '초기 렌더링과 인터랙션이 느린 빌더 화면에 이미지 지연 로딩·최적화를 적용하고 레거시 코드와 중복 로직을 정리. 사이트 제작 화면 초기 렌더링을 4.5초 단축하고, 이미지가 많은 페이지는 1초대까지 개선.',
          },
        ],
      },
    ],
  },
];
