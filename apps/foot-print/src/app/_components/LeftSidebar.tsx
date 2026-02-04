import { Avatar } from '@common/ui/atoms/Avatar';
import { Badge } from '@common/ui/atoms/Badge';
import { cn } from '@common/ui/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';

const CATEGORIES = [
  { name: 'All', count: 24 },
  { name: 'Frontend', count: 12 },
  { name: 'Backend', count: 5 },
  { name: 'DevOps', count: 4 },
  { name: 'Life', count: 3 },
] as const;

const TAGS = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Docker',
  'Git',
] as const;

export function LeftSidebar() {
  return (
    <aside
      className={cn(
        'sticky top-px-72 hidden h-fit w-280 shrink-0 flex-col gap-px-16',
        'dt:flex',
      )}
    >
      <Card>
        <CardHeader className="items-center text-center">
          <Avatar size="xl" fallback="JH" alt="Profile" />
          <div className="mt-12">
            <CardTitle>개발자 이름</CardTitle>
            <p className="mt-4 text-px-14 text-gray-500">Frontend Developer</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-px-14 text-gray-600">
            배움을 기록하고 나누는 공간입니다.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-px-16">카테고리</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-px-8">
            {CATEGORIES.map((category) => (
              <li key={category.name}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-px-6 px-8 py-6 text-px-14 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <span>{category.name}</span>
                  <span className="text-px-12 text-gray-400">
                    {category.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-px-16">태그</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-px-6">
            {TAGS.map((tag) => (
              <Badge key={tag} variant="secondary" size="sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
