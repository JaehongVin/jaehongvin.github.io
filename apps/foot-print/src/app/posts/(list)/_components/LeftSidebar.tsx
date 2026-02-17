'use client';

import { Avatar } from '@common/ui/atoms/Avatar';
import { Badge } from '@common/ui/atoms/Badge';
import { cn } from '@common/ui/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface CategoryCount {
  name: string;
  count: number;
}

interface LeftSidebarProps {
  categories: CategoryCount[];
  tags: string[];
  totalCount: number;
}

export const LeftSidebar = ({
  categories,
  tags,
  totalCount,
}: LeftSidebarProps) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentTag = searchParams.get('tag');
  const isAllSelected = !currentCategory && !currentTag;

  return (
    <aside
      className={cn(
        'sticky top-px-64 hidden h-fit w-220 shrink-0 flex-col gap-px-12',
        'tb:flex',
      )}
    >
      <Card>
        <CardHeader className="items-center text-center">
          <Avatar
            size="lg"
            fallback="JH"
            alt="Profile"
            src="/assets/images/profile.webp"
          />
          <div className="mt-8">
            <CardTitle className="text-px-14">빈재홍</CardTitle>
            <p className="mt-2 text-px-12 text-gray-500">Frontend Engineer</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-center text-px-12 text-gray-500">
            배움을 기록하고 나누는 공간입니다.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-px-13">카테고리</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-px-4">
            <li>
              <Link
                href="/posts"
                className={cn(
                  'flex w-full items-center justify-between rounded-px-4 px-6 py-4 text-px-12 text-gray-600 transition-colors hover:bg-gray-100/70 hover:text-gray-900',
                  isAllSelected && 'bg-gray-100 font-600 text-gray-900',
                )}
              >
                <span>All</span>
                <span className="text-px-11 text-gray-400">{totalCount}</span>
              </Link>
            </li>
            {categories.map((category) => {
              const isActive = currentCategory === category.name;

              return (
                <li key={category.name}>
                  <Link
                    href={`/posts?category=${encodeURIComponent(category.name)}`}
                    className={cn(
                      'flex w-full items-center justify-between rounded-px-4 px-6 py-4 text-px-12 text-gray-600 transition-colors hover:bg-gray-100/70 hover:text-gray-900',
                      isActive && 'bg-gray-100 font-600 text-gray-900',
                    )}
                  >
                    <span>{category.name}</span>
                    <span className="text-px-11 text-gray-400">
                      {category.count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-px-13">태그</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-px-4">
            {tags.map((tag) => {
              const isActive = currentTag === tag;

              return (
                <Link
                  key={tag}
                  href={`/posts?tag=${encodeURIComponent(tag)}`}
                  className={cn(
                    isActive && '[&>span]:bg-gray-200 [&>span]:font-600',
                  )}
                >
                  <Badge variant="secondary" size="sm">
                    #{tag}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};
