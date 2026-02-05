import { Badge } from '@common/ui/atoms/Badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@common/ui/molecules/Card';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import { mdxComponents } from '@/components/mdx';
import { getAllSlugs, getPostBySlug } from '@/utils/mdx';

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
        <CardHeader>
          <div className="flex items-center gap-px-6">
            <Badge variant="secondary" size="sm">
              {post.category}
            </Badge>
            <span className="text-px-12 text-gray-400">{post.date}</span>
          </div>
          <CardTitle className="mt-8 text-px-24 leading-px-32">
            {post.title}
          </CardTitle>
          <p className="mt-8 text-px-14 text-gray-500">{post.description}</p>
          <div className="mt-12 flex flex-wrap gap-px-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="border-t border-gray-100 pt-24">
          <div className="prose">
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
