import { Badge } from '@common/ui/atoms/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';

const POSTS = [
  {
    id: 1,
    title: 'Next.js 16의 새로운 기능들',
    description:
      'Next.js 16에서 추가된 새로운 기능들과 개선사항들을 알아봅니다. Turbopack 기본 활성화, React 19 지원 등 주요 변경사항을 다룹니다.',
    date: '2025-02-01',
    category: 'Frontend',
    tags: ['Next.js', 'React'],
  },
  {
    id: 2,
    title: 'TypeScript 5.0 마이그레이션 가이드',
    description:
      'TypeScript 5.0으로 마이그레이션하면서 겪은 경험과 주의할 점들을 공유합니다. const type parameters, decorators 등 새로운 기능도 소개합니다.',
    date: '2025-01-28',
    category: 'Frontend',
    tags: ['TypeScript'],
  },
  {
    id: 3,
    title: 'Tailwind CSS v4 알아보기',
    description:
      'Tailwind CSS v4의 새로운 아키텍처와 성능 개선사항을 살펴봅니다. CSS-first 설정, Lightning CSS 엔진 등 주요 변경사항을 다룹니다.',
    date: '2025-01-25',
    category: 'Frontend',
    tags: ['Tailwind', 'CSS'],
  },
  {
    id: 4,
    title: 'React Server Components 이해하기',
    description:
      'React Server Components의 개념과 사용법을 알아봅니다. 클라이언트 컴포넌트와의 차이점, 언제 사용해야 하는지 등을 설명합니다.',
    date: '2025-01-20',
    category: 'Frontend',
    tags: ['React', 'RSC'],
  },
  {
    id: 5,
    title: 'Docker 컨테이너 최적화 전략',
    description:
      '프로덕션 환경에서 Docker 컨테이너를 최적화하는 방법을 알아봅니다. 멀티 스테이지 빌드, 이미지 크기 줄이기 등의 전략을 다룹니다.',
    date: '2025-01-15',
    category: 'DevOps',
    tags: ['Docker', 'DevOps'],
  },
] as const;

export default function HomePage() {
  return (
    <article className="flex flex-col gap-px-16">
      {POSTS.map((post) => (
        <Card
          key={post.id}
          className="cursor-pointer transition-shadow hover:shadow-md"
        >
          <CardHeader>
            <div className="flex items-center gap-px-8">
              <Badge variant="secondary" size="sm">
                {post.category}
              </Badge>
              <span className="text-px-12 text-gray-400">{post.date}</span>
            </div>
            <CardTitle className="mt-8 text-px-18 leading-px-26">
              {post.title}
            </CardTitle>
            <CardDescription className="mt-8 line-clamp-2">
              {post.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-px-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </article>
  );
}
