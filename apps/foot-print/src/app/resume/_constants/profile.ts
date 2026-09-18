export interface ContactItem {
  value: string;
  href?: string;
}

export const CONTACTS: ContactItem[] = [
  { value: '010-3029-1190', href: 'tel:01030291190' },
  { value: 'dnflwoghddl@gmail.com', href: 'mailto:dnflwoghddl@gmail.com' },
  { value: 'github.com/jaehongVin', href: 'https://github.com/jaehongVin' },
  { value: 'jaehongvin.github.io', href: 'https://jaehongvin.github.io' },
];

export const SUMMARY =
  '빠르게 변하는 스타트업에서 제품과 개발 환경을 함께 만들어 온 프론트엔드 엔지니어입니다. 반복되는 일은 시키기 전에 자동화하고, 불편한 흐름은 더 나은 UX로 직접 제안하며, 느린 화면은 수치로 전후를 남깁니다. 한 사람이 감당하던 문제를 파이프라인과 공통 모듈로 옮겨 팀 전체가 쓰게 만드는 일에 강점이 있습니다.';
