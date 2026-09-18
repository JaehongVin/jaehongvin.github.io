export interface CertificationItem {
  title: string;
  date: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  { title: '정보처리기사', date: '2019.11' },
];

export interface AwardItem {
  title: string;
  date: string;
  org: string;
}

export const AWARDS: AwardItem[] = [
  {
    title: '전국 기능 경기 대회 동메달',
    date: '2014.10',
    org: '국제 기능 올림픽 대회 한국 위원회',
  },
  {
    title: '경기도 기능 경기 대회 금메달',
    date: '2014.04',
    org: '경기도 기능 경기 위원회',
  },
  {
    title: '경기도 기능 경기 대회 은메달',
    date: '2013.04',
    org: '경기도 기능 경기 위원회',
  },
];

export const AWARDS_NOTE =
  '모바일 로보틱스 직종, C언어를 이용한 로봇 제어 및 알고리즘 과제 수행';

export const MILITARY_SERVICE = '병역 군필 · 2016.01 ‒ 2018.12';
