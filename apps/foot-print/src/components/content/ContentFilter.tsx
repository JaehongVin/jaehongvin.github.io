'use client';

import { Badge } from '@common/ui/atoms/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/content/Pagination';
import type { PostMeta } from '@/types/post';

const ITEMS_PER_PAGE = 6;

interface ContentFilterProps {
  posts: PostMeta[];
  basePath: string;
  listPath: string;
}

export const ContentFilter = ({
  posts,
  basePath,
  listPath,
}: ContentFilterProps) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentTag = searchParams.get('tag');
  const hasActiveFilter = Boolean(currentCategory || currentTag);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      !currentCategory || post.category === currentCategory;
    const matchesTag = !currentTag || post.tags.includes(currentTag);

    return matchesCategory && matchesTag;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / ITEMS_PER_PAGE),
  );
  const requestedPage =
    Number.parseInt(searchParams.get('page') ?? '', 10) || 1;
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  if (filteredPosts.length === 0) {
    return (
      <Card>
        <CardContent className="py-32 text-center">
          <p className="text-px-14 text-gray-500">
            {hasActiveFilter
              ? '해당하는 게시글이 없습니다.'
              : '아직 게시글이 없습니다.'}
          </p>
          {hasActiveFilter && (
            <Link
              href={`/${listPath}`}
              className="mt-12 inline-block text-px-13 text-gray-600 underline"
            >
              전체 보기
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <article className="flex flex-col gap-px-12">
        {paginatedPosts.map((post) => (
          <Link key={post.slug} href={`/${basePath}/${post.slug}`}>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-px-6">
                  <Badge variant="secondary" size="sm">
                    {post.category}
                  </Badge>
                  <span className="text-px-11 text-gray-400">{post.date}</span>
                </div>
                <CardTitle className="mt-6 text-px-15 leading-px-22">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-4 line-clamp-2 text-px-13">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-px-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </article>
      <Pagination
        listPath={listPath}
        category={currentCategory}
        tag={currentTag}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};
