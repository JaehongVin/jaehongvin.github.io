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
import type { PostMeta } from '@/types/post';

interface PostFilterProps {
  posts: PostMeta[];
}

export const PostFilter = ({ posts }: PostFilterProps) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  const currentTag = searchParams.get('tag');

  const filteredPosts = posts.filter((post) => {
    if (currentCategory && post.category !== currentCategory) return false;
    if (currentTag && !post.tags.includes(currentTag)) return false;
    return true;
  });

  if (filteredPosts.length === 0) {
    return (
      <Card>
        <CardContent className="py-32 text-center">
          <p className="text-px-14 text-gray-500">
            {currentCategory || currentTag
              ? '해당하는 게시글이 없습니다.'
              : '아직 게시글이 없습니다.'}
          </p>
          {(currentCategory || currentTag) && (
            <Link
              href="/posts"
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
    <article className="flex flex-col gap-px-12">
      {filteredPosts.map((post) => (
        <Link key={post.slug} href={`/posts/${post.slug}`}>
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
  );
};
