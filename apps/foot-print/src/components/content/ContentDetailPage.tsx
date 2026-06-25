import { Badge } from '@common/ui/atoms/Badge';
import { Card, CardContent } from '@common/ui/molecules/Card';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { mdxComponents } from '@/components/mdx';
import { SITE_URL } from '@/constants/seo';
import type { Post } from '@/types/post';

interface ContentDetailPageProps {
  post: Post;
  basePath: string;
}

export const ContentDetailPage = ({
  post,
  basePath,
}: ContentDetailPageProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: '빈재홍',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: '빈재홍',
    },
    url: `${SITE_URL}/${basePath}/${post.slug}`,
    keywords: [post.category, ...post.tags],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                  remarkPlugins: [remarkGfm],
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
