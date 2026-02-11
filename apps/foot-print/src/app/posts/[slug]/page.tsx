import { Badge } from '@common/ui/atoms/Badge';
import { Card, CardContent } from '@common/ui/molecules/Card';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '@/components/mdx';
import { getAllSlugs, getPostBySlug } from '@/utils/mdx';

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: '게시글을 찾을 수 없습니다' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

const PostDetailPage = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Card>
        <CardContent className="p-24 tb:p-32">
          <header className="pb-32">
            <h1 className="text-px-32 font-700 leading-px-42 text-gray-900">
              {post.title}
            </h1>
            <p className="mt-12 text-px-15 text-gray-500">{post.description}</p>
            <div className="mt-16 flex flex-wrap items-center gap-px-8 text-px-13 text-gray-400">
              <time>{post.date}</time>
              <span aria-hidden="true">·</span>
              <Badge variant="secondary" size="sm">
                {post.category}
              </Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          </header>

          <hr className="border-gray-200" />

          <div className="prose pt-32">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default PostDetailPage;
