export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    school: '한국공학대학교',
    degree: '정보통신공학과 학사',
    period: '2015.03 ‒ 2019.02',
    note: '구 한국산업기술대학교 · 학점 3.06',
  },
  {
    school: '안산공업고등학교',
    degree: '전자과',
    period: '2012.03 ‒ 2015.02',
  },
];
