import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';
import { SITE_URL } from '@/constants/seo';

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '프론트엔드 개발자 빈재홍의 경력기술서입니다.',
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const CONTACTS: ContactItem[] = [
  { label: '전화', value: '010-3029-1190', href: 'tel:01030291190' },
  {
    label: '이메일',
    value: 'dnflwoghddl@gmail.com',
    href: 'mailto:dnflwoghddl@gmail.com',
  },
  {
    label: '깃허브',
    value: 'github.com/jaehongVin',
    href: 'https://github.com/jaehongVin',
  },
  {
    label: '블로그',
    value: 'jaehongvin.github.io',
    href: 'https://jaehongvin.github.io',
  },
];

interface SkillGroup {
  category: string;
  items: string;
}

const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    items:
      'JavaScript(ES6+), TypeScript, React(Next.js), Vue(Nuxt.js), Tanstack Query, Zustand, Tailwind, SCSS',
  },
  { category: 'Backend', items: 'Node.js(Express)' },
  {
    category: 'etc',
    items: 'Agile(Scrum, Kanban), Jira, Notion, Swagger, Figma, Sentry',
  },
];

interface AwardItem {
  title: string;
  meta: string;
  description: string;
}

const AWARDS: AwardItem[] = [
  {
    title: '전국 기능 경기 대회',
    meta: '2014.10 · 동메달 · 국제 기능 올림픽 대회 한국 위원회',
    description:
      '모바일 로보틱스 직종, C언어를 이용하여 로봇 제어 및 알고리즘 과제 수행',
  },
  {
    title: '경기도 기능 경기 대회',
    meta: '2014.04 · 금메달 · 경기도 기능 경기 위원회',
    description:
      '모바일 로보틱스 직종, C언어를 이용하여 로봇 제어 및 알고리즘 과제 수행',
  },
  {
    title: '경기도 기능 경기 대회',
    meta: '2013.04 · 은메달 · 경기도 기능 경기 위원회',
    description:
      '모바일 로보틱스 직종, C언어를 이용하여 로봇 제어 및 알고리즘 과제 수행',
  },
];

interface CertItem {
  title: string;
  date: string;
}

const CERTIFICATES: CertItem[] = [{ title: '정보처리기사', date: '2019.11' }];

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

const EDUCATION: EducationItem[] = [
  {
    school: '한국공학대학교',
    degree: '정보통신공학과 학사',
    period: '2015년 3월 - 2019년 2월',
    note: '구 한국산업기술대학교 · 학점 3.06',
  },
  {
    school: '안산공업고등학교',
    degree: '전자과',
    period: '2012년 3월 - 2015년 2월',
  },
];

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: '주식회사 웰로',
    role: 'Frontend Engineer',
    period: '2024년 6월 - 2026년 3월',
    description:
      '개인 맞춤형 복지 혜택 추천, 고향사랑기부제, 기업 솔루션 등 누적 이용자 500만 규모의 공공/복지 도메인 서비스를 운영하는 회사입니다. 웰로/웰로비즈/고향사랑기부제 3개 서비스와 백오피스를 아우르는 모노레포 환경에서 B2C, B2B, 커머스 등 다양한 프론트엔드 개발을 담당했습니다.',
    tech: [
      'Next.js(v14~16, App Router)',
      'Tanstack Router',
      'TypeScript',
      'TailwindCSS',
      'Tanstack Query',
      'Zustand',
    ],
  },
  {
    company: '주식회사 비투지게임즈',
    role: 'Frontend Engineer',
    period: '2023년 2월 - 2024년 6월',
    description:
      '판타지 스포츠 웹 게임 플랫폼을 운영하는 회사입니다. 카드 거래/랭킹/커뮤니티 등 게임 핵심 기능을 담당했습니다.',
    tech: ['Nuxt.js', 'TypeScript', 'Pinia'],
  },
  {
    company: '빈페이지(주)',
    role: 'Full-stack Engineer',
    period: '2020년 10월 - 2022년 7월',
    description:
      '코딩 없이 홈페이지를 만드는 드래그앤드롭 웹 빌더 서비스를 운영하는 회사입니다. 외부 서비스 연동과 성능 개선 등 서비스 전반을 풀스택으로 담당했습니다.',
    tech: ['Node.js', 'Express', 'jQuery', 'Ajax', 'MySQL', 'AWS EC2'],
  },
];

interface ProjectItem {
  title: string;
  summary: string;
  details: string[];
}

interface ProblemSolvingItem {
  title: string;
  problem: string;
  approach: string;
  result: string;
  note: string | null;
}

interface ProjectGroup {
  company: string;
  projects: ProjectItem[];
  problemSolving: ProblemSolvingItem[];
}

const PROJECTS: ProjectGroup[] = [
  {
    company: '주식회사 웰로',
    projects: [
      {
        title: '고향사랑기부제 커머스 서비스',
        summary:
          '지자체 답례품을 탐색하고 기부를 통해 답례품을 받을 수 있는 커머스 서비스의 프론트엔드 설계 및 개발',
        details: [
          '답례품 탐색→선택→결제까지의 전체 커머스 플로우 설계 및 구현 (답례품, 옵션, 전시, 이벤트 관리)',
          'PC 반응형 대응, 카테고리/지역 필터링, 옵션 선택 UI 개발',
          'KB Pay 앱 내 웹뷰 환경에서 서로 다른 서브도메인 간 기부 플로우 레이어 구축 (앱스킴 정의, 히스토리 동기화 브릿지)',
          'FlareLane(CRM) 도입으로 유저 체류 및 이탈 과정 분석 환경 구축',
        ],
      },
      {
        title: '정책 바로신청',
        summary:
          '웹앱 내에서 서울특별시/경기도 공공인증을 거쳐 복지 정책을 바로 신청할 수 있는 멀티스텝 플로우 구현',
        details: [
          '서울시, 경기도 각각 다른 인증 방식에 대응하는 공공인증 연동',
          '스텝별 상태 관리 및 이탈 방지 로직 설계',
        ],
      },
      {
        title: '웰로 비즈 B2B 서비스',
        summary:
          '지원사업, 조달사업, 전문가 자문 등 기업 맞춤형 솔루션 플랫폼 개발 (wellobiz.com)',
        details: [
          '도메인 주도 개발: 구독 상품, 투자사업, 지원사업, 조달사업 로드맵, 메인 홈 화면 개편, 전문가 자문 연결',
          'AI 검색 필터 고도화를 통한 기업 맞춤 사업 추천',
          '서비스 전역 공용 검색 필터 컴포넌트 설계',
          '서비스 기능 개발을 위한 BFF 개발 (API Routes 활용)',
        ],
      },
      {
        title: '웰로 서비스 (welfarehello.com)',
        summary:
          '맞춤형 혜택 및 정책 추천, 신청 간소화를 제공하는 메인 서비스 개발',
        details: [
          '상황별 정책 추천, 바우처 도우미, 고향사랑 기부제 등 도메인 기능 개발',
          '홈 화면 전반적인 UI/UX 개편 (서비스 첫 진입점)',
          '마이페이지 구성 및 UI/UX 변경',
          '럭키볼 회원가입 이벤트: 다양한 인터랙션 기능 개발 (matter.js, framer-motion 활용)',
        ],
      },
      {
        title: 'JavaScript Bridge 기능 확장 및 웹뷰 환경 관리',
        summary: 'Flutter 앱과의 웹뷰 통신 모듈 관리 및 외부 앱(KB Pay) 연동',
        details: [
          '웹 단 브릿지 통신 모듈 관리 및 window 객체 바인딩을 통한 히스토리 백 이슈 해결',
          '네이티브앱 상단 상태바 컨트롤, 햅틱 피드백 통신 로직 개발',
          'KB Pay 앱 연동: 외부 브라우저 ↔ 앱 간 앱스킴 정의 및 히스토리 동기화 브릿지 개발',
        ],
      },
      {
        title: '디자인 시스템 유지보수 및 확장',
        summary:
          'Atomic Design Pattern 기반 React 디자인 시스템의 유지보수 및 신규 컴포넌트 확장',
        details: [
          '디자이너와 소통하며 신규 공통 컴포넌트 개발 및 기존 컴포넌트 개선',
          '디자인토큰 기반 테마 관리 및 일관성 유지',
          'WCAG 표준 준수 UI 컴포넌트 접근성 개선',
          '3개 서비스에서 공유되는 컴포넌트 라이브러리 유지보수',
        ],
      },
    ],
    problemSolving: [
      {
        title: 'AI 기반 에러 모니터링 자동화 파이프라인',
        problem:
          '에러 발생 시 수동으로 Sentry 확인 → Jira 티켓 생성 → Slack 공유까지 5분 이상 소요. 에러를 놓치는 경우도 발생.',
        approach:
          'Sentry Webhook → AWS Lambda → Claude API로 에러 분석 → Jira 티켓 자동 생성 + Slack 알림 파이프라인 구축. 프로젝트별 Jira Epic 자동 라우팅, AI 기반 심각도/원인 자동 분류. 개인 비용으로 POC 진행 후 팀에 제안하여 도입.',
        result:
          '에러 인지→티켓 생성: 수동 5분 → 자동 30초로 단축. 월 약 $6 비용으로 운영하며, 사람이 반복하던 원인 분석·티켓 작성 리소스를 절감.',
        note: 'Sentry 기본 알림은 에러 발생 알림만 제공. 이 파이프라인은 에러 수집 이후의 팀 워크플로우 자동화(원인 분석 + 심각도 판단 + Jira Epic 라우팅)가 목적. Sentry MCP는 로컬 개인 분석 도구이고, 이 파이프라인은 팀 전체 자동화를 담당.',
      },
      {
        title: 'GitLab MR AI 정적 분석 파이프라인',
        problem:
          '코드 리뷰에 시간이 많이 소요되고, 컨벤션 위반이 리뷰에서 자주 발견됨.',
        approach:
          'GitLab CI에서 MR 생성 시 Gemini API로 변경사항 자동 분석. Draft MR 제외, PR당 1회만 실행.',
        result:
          '컨벤션 위반, 타입 안전성, 잠재적 버그 패턴을 자동 검출. 사람은 아키텍처/설계 수준 리뷰에 집중 가능.',
        note: '정적 분석기 보조 목적. 변경사항만으로 판단 가능한 패턴 위반 검출에 초점. 전체 코드베이스 인덱싱은 토큰 비용과 응답 시간 트레이드오프를 고려하여 추후 RAG 기반 개선 검토 중.',
      },
      {
        title:
          'LLM 활용 500개 이상 레거시 lint error 일괄 정리 + 코드 품질 가드',
        problem:
          '프로젝트에 500개 이상의 레거시 lint error가 쌓여 있어, 새 코드의 에러와 구분이 안 되는 상황.',
        approach:
          'LLM을 활용하여 에러를 패턴별로 분류하고, 자동 수정 가능한 것은 일괄 처리. 수동 확인이 필요한 것만 직접 수정. 정리 후 Git Hooks(Husky, lint-staged)를 가드로 도입하여 다시 쌓이지 않도록 방지.',
        result:
          '500개 이상 lint error 제거 완료. Husky 가드를 통해 신규 lint error 유입 차단.',
        note: '자동 수정 후 사이드이펙트 검증은 빌드 + 기존 테스트 통과로 진행. 변경 범위가 큰 건 PR 단위로 나눠서 리뷰.',
      },
      {
        title: 'SSR 페이지 스트리밍 렌더링 도입 및 성능 최적화',
        problem:
          '메인 페이지 LightHouse Performance 39점. 동영상이 포함된 페이지 로딩 10초 이상. LayoutShift 발생.',
        approach:
          '스트리밍 렌더링으로 FCP 개선. mp4→webm 자동 변환 + 썸네일 자동 생성 + 디스크 캐싱. LayoutShift 발생 페이지 스켈레톤 적용. 불필요한 반복 렌더링 쓰로틀링, 반복 요청 디바운싱 처리.',
        result:
          'FCP 4.2초→1.7초 달성. Performance 39→78, SEO 92→100, Accessibility 74→95. 동영상 로딩 10초→1초 이하. CLS 0.25→0.02로 개선.',
        note: 'SSG는 동적 데이터로 인해 불가. ISR 대비 스트리밍은 사용자가 콘텐츠를 점진적으로 볼 수 있어 체감 성능이 더 좋음.',
      },
      {
        title: '번들 사이즈 최적화',
        problem: '불필요한 의존성과 미사용 코드로 번들 사이즈가 비대해진 상태.',
        approach:
          'React Swiper → Embla (60KB 감소). Yup → Zod (폼 검증 속도 1.5배 향상, 타입 안전성). tinycolor2, aos, qs, nanoid 등 네이티브 API 대체 (80KB 감소). knip으로 미사용 파일 130→6개, export 170→0개 제거 후, 설정 파일을 프로젝트에 추가하고 CI 파이프라인에 연동하여 미사용 코드가 다시 쌓이지 않도록 지속 관리 체계 구축.',
        result: '번들 사이즈 140KB 감소. 배포 시간 36초 단축.',
        note: null,
      },
      {
        title: '크롤러 트래픽으로 인한 서버 부하 해결',
        problem:
          '구글봇 등 크롤러의 반복적인 슬로우쿼리 API 호출로 서버 부하 발생.',
        approach: 'User-Agent 기반 필터링 적용.',
        result: '백엔드 부하 50% 이상 감축.',
        note: 'robots.txt만으로는 API 직접 호출을 막을 수 없었음. HTML 크롤링은 허용, API 엔드포인트만 필터링하여 SEO 영향 없이 해결.',
      },
      {
        title: '사이트맵 생성 로직 개선 및 빌드 최적화',
        problem:
          '빌드 시 사이트맵 생성을 위해 API 120회 호출. DB 커넥션 오류로 배포 실패 빈번.',
        approach:
          '백엔드 배치 + S3 업로드로 전환. 동적/정적 라우팅 자동 반영, CLI로 S3에서 다운로드. 백엔드/데브옵스 협업으로 CI/CD 파이프라인 개선.',
        result:
          '빌드 시간 1분 단축. DB 커넥션 오류로 인한 배포 실패 이슈 해소.',
        note: null,
      },
      {
        title: 'Next.js Route Cache 멀티 프로세스 캐시 불일치 해결',
        problem:
          'PM2 cluster 환경에서 프로세스별 캐시가 달라 사용자마다 다른 데이터가 보이는 이슈.',
        approach: '커스텀 캐시 핸들러를 구현하여 프로세스 간 캐시 공유.',
        result: '캐시 불일치 이슈 해결. 모든 프로세스에서 동일한 데이터 제공.',
        note: null,
      },
      {
        title: '운영 효율화 시스템 구축',
        problem:
          '점검 페이지 하드코딩 관리 (반영 10분+), QR 코드 URL 변경 시 재발급 필요.',
        approach:
          '점검 페이지 어드민 동적 관리 시스템 구축. API Routes redirect 활용 QR URL 동적 관리 시스템 구축.',
        result: '점검 반영 시간 10분→즉시. QR 재발급 불필요.',
        note: null,
      },
      {
        title: 'ISMS-P, CSAP 인증 대응',
        problem: '보안 인증 심사 대응을 위한 시큐어 코딩 및 취약점 조치 필요.',
        approach:
          'ISMS-P, CSAP 인증 및 유지를 위한 시큐어 코딩 적용. 프론트엔드 단 보안 취약점 점검 및 조치.',
        result: '인증 심사 통과 및 유지.',
        note: null,
      },
    ],
  },
  {
    company: '주식회사 비투지게임즈',
    projects: [
      {
        title: '판타지 스포츠 웹 게임 플랫폼',
        summary:
          '스포츠 경기별 나만의 라인업 제출, 선수 카드 업그레이드 및 거래 등 판타지 스포츠 웹 게임 개발',
        details: [
          '사용자간 카드 거래 UI/UX 트랜잭션 플로우 개발 (불필요한 카드 소모 및 사이트 활동량 촉진 목적)',
          '상점, 랭킹 페이지 개발 (다양한 게임 참여 유도 및 유저간 경쟁 촉진)',
          'tiptap 기반 리치 텍스트 에디터 구현 (사이트 체류시간 증가를 위한 유저 게시판)',
          'chart.js 활용 통계 대시보드 개발 (선수 통계 지표 시각화)',
          '중복되는 UI 컴포넌트화로 개발 유지보수성 및 속도 개선',
          '배포 서버 환경 관리',
        ],
      },
    ],
    problemSolving: [
      {
        title: '카드 무한 스크롤 렌더링 성능 개선',
        problem: '애니메이션이 포함된 카드 무한 스크롤에서 렌더링 부하 발생.',
        approach: '가상 스크롤(windowing) 적용.',
        result: '대량 카드 렌더링 성능 개선, 프레임 드랍 해소.',
        note: null,
      },
      {
        title: 'Vuex → Pinia 마이그레이션',
        problem:
          'Vue 공식 지원 라이브러리가 vuex에서 pinia로 변경. vuex는 TypeScript 지원이 불편하고 보일러플레이트가 많음.',
        approach: '프로젝트 개발 초기에 선제적으로 pinia 마이그레이션 진행.',
        result:
          '가독성 향상. 별도 설정 없이 TypeScript 사용 가능. 보일러플레이트 감소.',
        note: null,
      },
    ],
  },
  {
    company: '빈페이지(주)',
    projects: [
      {
        title: '드래그앤드롭 웹 빌더 서비스',
        summary:
          '사용자가 코딩 없이 홈페이지를 제작할 수 있는 드래그앤드롭 기반 웹 빌더 서비스 개발',
        details: [
          'JSON Schema 기반 동적 컴포넌트 렌더링 시스템 개발',
          '에디터 ↔ 프리뷰 실시간 동기화 및 iframe 샌드박스 환경 구축',
          '다양한 추가 기능 개발 및 버그 수정 (주기적 릴리즈 노트로 매달 서비스 사용량 증가)',
        ],
      },
      {
        title: '외부 서비스 연동 플러그인 개발',
        summary:
          '웹 빌더 서비스의 확장성을 위한 외부 서비스 연동 플러그인 아키텍처 설계 및 개발',
        details: [
          'OAuth 2.0 소셜로그인 통합 모듈 개발 (네이버, 카카오, 구글, 페이스북, 카카오 싱크) → 회원가입 전환율 34% 증가',
          '애플 로그인 기능 개발 (앱스토어 심사 정책 변경 대응) → 52건 밀린 앱 심사 + 13건 신규 심사 일괄 처리',
          '쇼핑몰 통합 관리 솔루션(사방넷) 연동 → 유료 전환율 25% 증가',
          '인스타그램 API 연동 (게시글 동기화) → 개인 블로그/소개 사이트 등 사이트 다양성 증가',
          '카카오톡 채널 API, 채널톡 API 연동 → CS 문의량 감소 및 사용자 활동량 증가',
          '네이버 프리미엄 로그, 페이스북 픽셀 적용 → 마케팅 전환 추적 및 광고 비용 최적화',
        ],
      },
    ],
    problemSolving: [
      {
        title: '사이트 성능 개선',
        problem:
          '긴 페이지 렌더링 시간, 느린 인터랙션 반응 속도, 가독성이 떨어지는 코드.',
        approach:
          '이미지 레이지 로딩, 이미지 최적화, 불필요한 동기 작업을 비동기 처리(Promise.all). 레거시 코드 제거 및 중복 로직 메소드화. 반복 요청 디바운싱 처리.',
        result:
          '사이트 제작 화면 초기 렌더링 시간 4.5초 단축. 이미지가 많은 페이지 초기 렌더링 시간 최대 1초대로 단축.',
        note: null,
      },
    ],
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className={cn(
      'mb-24 border-b border-gray-200 pb-8 text-px-20 font-700 text-gray-900',
      'tb:text-px-24',
    )}
  >
    {children}
  </h2>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-px-4 bg-gray-100 px-8 py-2 text-px-11 font-500 text-gray-500">
    {children}
  </span>
);

const PortfolioPage = () => (
  <main
    className={cn('mx-auto w-full px-16 py-32', 'tb:px-24', 'dt:max-w-px-900')}
  >
    <section className="mb-40">
      <h1 className="text-px-28 font-800 text-gray-900 tb:text-px-36">
        빈재홍
      </h1>
      <p className="mt-4 text-px-14 text-gray-500 tb:text-px-16">
        Frontend Engineer · 경력 5년+
      </p>
      <p className="mt-12 text-px-14 leading-px-22 text-gray-600 tb:text-px-15">
        빠르게 변하는 스타트업 환경에서 길이 없을 때 길을 만들며 일해 온
        프론트엔드 엔지니어입니다. 반복되는 일은 누가 시키기 전에 자동화하고,
        불편한 흐름은 더 나은 UX로 직접 제안하며, 느린 화면은 수치로 전후를
        남기며 끝까지 빠르게 만듭니다. 변화에 빠르게 적응하면서 자동화와 UX·성능
        개선으로 팀과 사용자의 경험을 함께 끌어올리는 일을 가장 좋아합니다.
      </p>
    </section>

    <section className="mb-48">
      <SectionTitle>인적사항</SectionTitle>
      <dl className="flex flex-col gap-px-8">
        {CONTACTS.map((contact) => (
          <div key={contact.label} className="flex gap-px-12 text-px-14">
            <dt className="w-72 shrink-0 font-600 text-gray-500">
              {contact.label}
            </dt>
            <dd className="text-gray-700">
              {contact.href ? (
                <a
                  href={contact.href}
                  className="underline-offset-2 hover:underline"
                  target={
                    contact.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    contact.href.startsWith('http') ? 'noreferrer' : undefined
                  }
                >
                  {contact.value}
                </a>
              ) : (
                contact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="mb-48">
      <SectionTitle>기술</SectionTitle>
      <div className="flex flex-col gap-px-12">
        {SKILLS.map((skill) => (
          <div
            key={skill.category}
            className="flex flex-col gap-px-4 tb:flex-row tb:gap-px-16"
          >
            <span className="w-88 shrink-0 text-px-14 font-700 text-gray-700">
              {skill.category}
            </span>
            <span className="text-px-14 leading-px-22 text-gray-600">
              {skill.items}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>수상 내역</SectionTitle>
      <div className="flex flex-col gap-px-16">
        {AWARDS.map((award) => (
          <div key={award.meta}>
            <p className="text-px-14 font-600 text-gray-800">{award.title}</p>
            <p className="mt-2 text-px-13 text-gray-500">{award.meta}</p>
            <p className="mt-4 text-px-13 leading-px-20 text-gray-600">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>자격증</SectionTitle>
      <div className="flex flex-col gap-px-8">
        {CERTIFICATES.map((cert) => (
          <p key={cert.title} className="text-px-14 text-gray-700">
            <span className="font-600">{cert.title}</span>
            <span className="ml-8 text-px-13 text-gray-500">{cert.date}</span>
          </p>
        ))}
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>학력</SectionTitle>
      <div className="flex flex-col gap-px-16">
        {EDUCATION.map((education) => (
          <div key={education.school}>
            <p className="text-px-14 font-600 text-gray-800">
              {education.school}
            </p>
            <p className="mt-2 text-px-13 text-gray-600">{education.degree}</p>
            <p className="mt-2 text-px-13 text-gray-500">{education.period}</p>
            {education.note && (
              <p className="mt-2 text-px-12 text-gray-400">{education.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="mb-48">
      <SectionTitle>병역</SectionTitle>
      <p className="text-px-14 text-gray-700">
        <span className="font-600">군필</span>
        <span className="ml-8 text-px-13 text-gray-500">2016.01 ~ 2018.12</span>
      </p>
    </section>

    <section className="mb-48">
      <SectionTitle>경력</SectionTitle>
      <div className="flex flex-col gap-px-20">
        {EXPERIENCE.map((experience) => (
          <div key={experience.company}>
            <h3 className="text-px-16 font-700 text-gray-900">
              {experience.company}
            </h3>
            <p className="mt-2 text-px-13 text-gray-500">
              {experience.role} · {experience.period}
            </p>
            <p className="mt-8 text-px-13 leading-px-20 text-gray-600">
              {experience.description}
            </p>
            <ul className="mt-12 flex flex-wrap gap-px-6">
              {experience.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-px-6 bg-gray-100 px-8 py-4 text-px-12 text-gray-600"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section>
      <SectionTitle>프로젝트</SectionTitle>
      <div className="flex flex-col gap-px-48">
        {PROJECTS.map((group) => (
          <article key={group.company}>
            <div className="mb-20">
              <h3 className="text-px-18 font-700 text-gray-900">
                {group.company}
              </h3>
            </div>

            {group.projects.length > 0 && (
              <div className="mb-20">
                <h4 className="mb-12 text-px-14 font-600 text-gray-700">
                  서비스 개발
                </h4>
                <div className="flex flex-col gap-px-16">
                  {group.projects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-px-8 border border-gray-200/80 bg-white/60 p-16 tb:p-20"
                    >
                      <h5 className="text-px-15 font-600 text-gray-800">
                        {project.title}
                      </h5>
                      <p className="mt-4 text-px-13 leading-px-20 text-gray-500">
                        {project.summary}
                      </p>
                      <ul className="mt-12 flex flex-col gap-px-6">
                        {project.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-px-8 text-px-13 leading-px-20 text-gray-600"
                          >
                            <span
                              className="mt-8 size-3 shrink-0 rounded-full bg-gray-300"
                              aria-hidden="true"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {group.problemSolving.length > 0 && (
              <div>
                <h4 className="mb-12 text-px-14 font-600 text-gray-700">
                  문제 해결 및 기술 개선
                </h4>
                <div className="flex flex-col gap-px-16">
                  {group.problemSolving.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-px-8 border border-gray-200/80 bg-white/60 p-16 tb:p-20"
                    >
                      <h5 className="text-px-15 font-600 text-gray-800">
                        {item.title}
                      </h5>
                      <div className="mt-12 flex flex-col gap-px-10">
                        <div>
                          <Label>문제</Label>
                          <p className="mt-4 text-px-13 leading-px-20 text-gray-600">
                            {item.problem}
                          </p>
                        </div>
                        <div>
                          <Label>접근</Label>
                          <p className="mt-4 text-px-13 leading-px-20 text-gray-600">
                            {item.approach}
                          </p>
                        </div>
                        <div>
                          <Label>결과</Label>
                          <p className="mt-4 text-px-13 leading-px-20 font-500 text-gray-700">
                            {item.result}
                          </p>
                        </div>
                        {item.note && (
                          <div className="mt-4 rounded-px-6 bg-gray-50 px-12 py-10">
                            <p className="text-px-12 leading-px-18 text-gray-500">
                              {item.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default PortfolioPage;
