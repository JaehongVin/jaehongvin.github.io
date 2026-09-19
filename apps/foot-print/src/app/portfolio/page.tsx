import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';
import { SITE_URL } from '@/constants/seo';
import { EDUCATION } from '../resume/_constants/education';
import { SKILLS } from '../resume/_constants/skills';

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
    period: '2024.06 ‒ 2026.03',
    description:
      '개인 맞춤형 복지 혜택 추천, 고향사랑기부제, 기업 솔루션 등 누적 이용자 500만 규모의 공공/복지 도메인 서비스를 운영하는 회사입니다. 웰로/웰로비즈/고향사랑기부제 3개 서비스와 백오피스를 아우르는 모노레포 환경에서 B2C, B2B, 커머스 등 다양한 프론트엔드 개발을 담당했습니다.',
    tech: [
      'Next.js(v14~16, App Router)',
      'TanStack Router',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
    ],
  },
  {
    company: '주식회사 비투지게임즈',
    role: 'Frontend Engineer',
    period: '2023.02 ‒ 2024.06',
    description:
      '판타지 스포츠 웹 게임 플랫폼을 운영하는 회사입니다. 카드 거래/랭킹/커뮤니티 등 게임 핵심 기능을 담당했습니다.',
    tech: ['Nuxt.js', 'TypeScript', 'Pinia'],
  },
  {
    company: '빈페이지(주)',
    role: 'Full-stack Engineer',
    period: '2020.10 ‒ 2022.07',
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
          'FlareLane(CRM) 도입으로 유저 체류 및 이탈 과정 분석 환경 구축',
        ],
      },
      {
        title: '정책 바로신청',
        summary:
          '웹앱 내에서 서울특별시/경기도 공공인증을 거쳐 복지 정책을 바로 신청할 수 있는 멀티스텝 플로우 구현',
        details: [
          '서울시·경기도의 서로 다른 인증 방식을 스텝 단위로 추상화해 공공인증 연동',
          '흩어진 분기를 정리하고 상태 관리와 이탈 방지 로직을 한 곳으로 통합',
        ],
      },
      {
        title: '웰로 비즈 B2B 서비스',
        summary:
          '지원사업, 조달사업, 전문가 자문 등 기업 맞춤형 솔루션 플랫폼 개발 (wellobiz.com)',
        details: [
          '구독 상품, 투자·지원·조달사업 로드맵, 전문가 자문 연결, 메인 홈 화면 개편 등 기업 맞춤 솔루션 개발',
          '사업 종류마다 화면별로 따로 만들던 검색 필터를 서비스 전역 공용 컴포넌트로 통합',
          '화면이 서로 다른 도메인의 백엔드를 각각 호출하던 구조를 API Routes 기반 BFF로 전환해 화면 단위 응답으로 통합',
        ],
      },
      {
        title: '웰로 서비스 (welfarehello.com)',
        summary:
          '맞춤형 혜택 및 정책 추천, 신청 간소화를 제공하는 메인 서비스 개발',
        details: [
          '상황별 정책 추천, 바우처 도우미, 고향사랑 기부제 등 도메인 기능 개발',
          '홈 화면·마이페이지 UI/UX 개편 (서비스 첫 진입점)',
          '럭키볼 회원가입 이벤트: 물리 기반 인터랙션 구현 (Matter.js, framer-motion 활용)',
        ],
      },
      {
        title: 'JavaScript Bridge 기능 확장 및 웹뷰 환경 관리',
        summary: 'Flutter 앱과의 웹뷰 통신 모듈 관리 및 외부 앱(KB Pay) 연동',
        details: [
          '웹 단 브릿지 통신 모듈 관리 및 window 객체 바인딩을 통한 히스토리 백 이슈 해결',
          '네이티브앱 상단 상태바 컨트롤, 햅틱 피드백 통신 로직 개발',
          'KB Pay 앱 웹뷰에서 서브도메인을 오가는 기부 플로우를 위한 앱스킴 정의 및 히스토리 동기화 브릿지 개발',
        ],
      },
      {
        title: '디자인 시스템 유지보수 및 확장',
        summary:
          '3개 서비스가 공유하는 기존 Atomic Design 기반 React 디자인 시스템의 공통 컴포넌트 추가·개선 담당',
        details: [
          '디자이너와 소통하며 신규 공통 컴포넌트 개발 및 기존 컴포넌트 개선',
          '디자인토큰 기반 테마 관리 및 일관성 유지',
          'WCAG 표준에 맞춘 UI 컴포넌트 접근성 개선',
          '3개 서비스에서 공유되는 컴포넌트 라이브러리 유지보수',
        ],
      },
    ],
    problemSolving: [
      {
        title: '모노레포 AI 코딩 에이전트 하네스 설계',
        problem:
          '모노레포 전체를 루트 컨텍스트 파일 하나로 설명하던 구조. 패키지별 규칙과 에이전트 산출물 검증 장치가 없던 상태.',
        approach:
          '에이전트 규칙을 루트·패키지별로 계층화해 소유 범위와 프론트엔드 컨벤션을 명시. 타입 검사·빌드를 실행 루프에 연결해 오류 수정과 재검증을 수행하도록 구성.',
        result: '규칙과 검증 루프를 적용하고 반복 오류를 규칙에 반영하며 운영.',
        note: null,
      },
      {
        title: 'AI 기반 에러 모니터링 자동화 파이프라인',
        problem:
          '에러 대응이 사람이 Sentry를 확인하는 시점에 시작. 확인이 늦어지면 에러를 놓치고, 원인 파악·Jira 티켓 생성·Slack 공유는 매번 수작업.',
        approach:
          'Sentry Webhook → AWS Lambda → Claude API로 원인·심각도 분류 → Jira Epic별 티켓 생성과 Slack 알림을 자동화. 개인 비용으로 POC를 구축해 팀에 제안.',
        result:
          'POC 테스트에서 Webhook 수신부터 Jira 티켓 생성까지 30초 이내 처리를 확인하고 정식 도입. 월 약 $6의 API 비용으로 운영.',
        note: null,
      },
      {
        title: '코드 리뷰·품질 검사 자동화',
        problem:
          '레거시 lint 오류 500여 건이 쌓여 있고 코드 리뷰에서 컨벤션 위반을 반복 확인하던 상황.',
        approach:
          'LLM으로 lint 오류를 분류해 자동·수동 수정하고 Husky·lint-staged로 커밋 시 검사. Gemini API 기반 변경사항 분석을 GitLab CI에 연동. Draft 제외·MR당 1회 실행으로 비용 통제.',
        result:
          '레거시 lint 오류 500여 건 정리. 커밋 시 품질 검사와 MR 변경사항 분석으로 컨벤션 위반·잠재 버그 검토를 보조.',
        note: null,
      },
      {
        title: '상품 상세 페이지 렌더링 전략 재설계',
        problem:
          '상품 상세 페이지 모바일 Lighthouse Performance 41점. 기존 ISR 갱신 주기가 가격·재고의 최신성 요구를 충족하지 못하는 상황.',
        approach:
          'SSR과 스트리밍 렌더링으로 전환. 구매 결정에 필요한 정보는 먼저 제공하고 상세 콘텐츠·하단 섹션은 Suspense 경계로 분리. 영상은 썸네일 선노출·지연 로드를 적용하고 MP4를 WebM으로 자동 변환해 용량을 약 40% 줄임.',
        result:
          '동일 상품 상세 페이지를 동일 조건에서 측정한 모바일 Lighthouse 기준, Performance 41→82점, FCP 3.2→1.2초, LCP 5.6→2.1초로 개선.',
        note: '느린 쿼리 하나가 페이지 전체를 붙잡지 않도록 데이터 중요도 기준으로 Suspense 경계를 나눴다.',
      },
      {
        title: '번들 사이즈 최적화',
        problem: '불필요한 의존성과 미사용 코드로 번들 사이즈가 비대해진 상태.',
        approach:
          'React Swiper를 Embla로 교체 (60KB 감소). Yup에서 Zod로 교체 (타입 안전성 확보). tinycolor2, aos, qs, nanoid 등 네이티브 API 대체 (80KB 감소). knip으로 미사용 파일 130개에서 6개로, export 170개에서 0개로 제거 후, 설정 파일을 프로젝트에 추가하고 CI 파이프라인에 연동하여 미사용 코드가 다시 쌓이지 않도록 지속 관리 체계 구축.',
        result: '번들 사이즈 140KB 감소. 배포 시간 36초 단축.',
        note: null,
      },
      {
        title: '사이트맵 생성 로직 개선 및 빌드 최적화',
        problem:
          '빌드 시 사이트맵 생성을 위해 API 120회 호출. DB 커넥션 오류로 배포 실패 빈번.',
        approach:
          '백엔드 배치 + S3 업로드로 전환. 동적/정적 라우팅 자동 반영, CLI로 S3에서 다운로드. 백엔드/데브옵스 협업으로 CI/CD 파이프라인 개선.',
        result: '배포 실패 이슈 해소. 빌드 시간 1분 단축.',
        note: null,
      },
      {
        title: 'Next.js Route Cache 멀티 프로세스 캐시 불일치 해결',
        problem:
          'PM2 cluster 환경에서 프로세스별 캐시가 달라 사용자마다 다른 데이터가 보이는 이슈.',
        approach:
          '각 프로세스가 같은 캐시를 참조하도록 Redis를 공용 저장소로 사용하는 커스텀 캐시 핸들러를 구현.',
        result: '캐시를 유지하면서 프로세스 간 캐시 불일치를 해소.',
        note: null,
      },
      {
        title: 'ISMS-P, CSAP 인증 대응',
        problem: '보안 인증 심사 대응을 위한 시큐어 코딩 및 취약점 조치 필요.',
        approach:
          'ISMS-P, CSAP 인증 및 유지를 위한 시큐어 코딩 적용. 프론트엔드 단 보안 취약점 점검 및 조치.',
        result:
          '프론트엔드 보안 취약점 점검·조치로 ISMS-P·CSAP 인증 대응에 참여.',
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
          '경기별 라인업 제출, 선수 카드 업그레이드·거래 플로우 개발',
          '상점·랭킹 페이지 개발',
          'tiptap 기반 유저 게시판 리치 텍스트 에디터 구현',
          'Chart.js 기반 선수 통계 대시보드로 카드 가치 판단에 필요한 지표 시각화',
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
        problem: 'Vuex의 TypeScript 연동 부담과 많은 보일러플레이트.',
        approach: '프로젝트 초기에 Pinia로 선제 마이그레이션.',
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
        ],
      },
      {
        title: '외부 서비스 연동 플러그인 개발',
        summary:
          '웹 빌더 서비스의 확장성을 위한 외부 서비스 연동 플러그인 아키텍처 설계 및 개발',
        details: [
          'OAuth 2.0 소셜 로그인 통합 모듈 개발',
          '애플 로그인 기능 개발 (앱스토어 심사 정책 변경 대응) — 52건 밀린 앱 심사 + 13건 신규 심사 일괄 처리',
          '쇼핑몰 통합 관리 솔루션(사방넷) 연동',
          '같은 플러그인 구조로 인스타그램 게시글 동기화·카카오톡 채널·마케팅 픽셀 연동 확장',
        ],
      },
    ],
    problemSolving: [
      {
        title: '사이트 성능 개선',
        problem:
          '긴 페이지 렌더링 시간, 느린 인터랙션 반응 속도, 가독성이 떨어지는 코드.',
        approach: '이미지 지연 로딩·최적화 적용. 레거시 코드와 중복 로직 정리.',
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
        Frontend Engineer
      </p>
      <p className="mt-12 text-px-14 leading-px-22 text-gray-600 tb:text-px-15">
        B2C·B2B·커머스 서비스의 프론트엔드를 개발하며, 신규 서비스 구축부터 성능
        개선과 운영 문제 해결까지 담당했습니다. 데이터 특성에 맞춘 렌더링 설계와
        공통 컴포넌트, 반복 업무 자동화를 통해 사용자 경험과 팀의 개발 효율을
        개선해 왔습니다.
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
            <span className="w-112 shrink-0 text-px-14 font-700 text-gray-700">
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
