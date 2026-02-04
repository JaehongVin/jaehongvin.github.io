import { cn } from '@common/ui/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';

const RECENT_POSTS = [
  { title: 'Next.js 15의 새로운 기능들', date: '2025-02-01' },
  { title: 'TypeScript 5.0 마이그레이션 가이드', date: '2025-01-28' },
  { title: 'Tailwind CSS v4 알아보기', date: '2025-01-25' },
  { title: 'React Server Components 이해하기', date: '2025-01-20' },
] as const;

const TOC_LEVEL = {
  PARENT: 1,
  CHILD: 2,
} as const;

const TOC_ITEMS = [
  { id: 'introduction', title: '소개', level: TOC_LEVEL.PARENT },
  { id: 'getting-started', title: '시작하기', level: TOC_LEVEL.PARENT },
  { id: 'installation', title: '설치', level: TOC_LEVEL.CHILD },
  { id: 'configuration', title: '설정', level: TOC_LEVEL.CHILD },
  { id: 'usage', title: '사용법', level: TOC_LEVEL.PARENT },
  { id: 'conclusion', title: '마무리', level: TOC_LEVEL.PARENT },
] as const;

export function RightSidebar() {
  return (
    <aside
      className={cn(
        'sticky top-px-72 hidden h-fit w-240 shrink-0 flex-col gap-px-16',
        'dt:flex',
      )}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-px-16">목차</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="flex flex-col gap-px-4">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'rounded-px-4 py-4 text-px-13 text-gray-500 transition-colors hover:text-gray-900',
                  item.level === TOC_LEVEL.PARENT && 'font-500',
                  item.level === TOC_LEVEL.CHILD && 'pl-12',
                )}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-px-16">최근 글</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-px-12">
            {RECENT_POSTS.map((post) => (
              <li key={post.title}>
                <button
                  type="button"
                  className="group block w-full rounded-px-4 text-left transition-colors"
                >
                  <p className="line-clamp-2 text-px-13 font-500 text-gray-700 transition-colors group-hover:text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-2 text-px-12 text-gray-400">{post.date}</p>
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
