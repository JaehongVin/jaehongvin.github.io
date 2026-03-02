import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentDetailPage } from '@/components/content/ContentDetailPage';
import { SITE_NAME, SITE_URL } from '@/constants/seo';
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

  const postUrl = `${SITE_URL}/posts/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [post.category, ...post.tags],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      publishedTime: new Date(post.date).toISOString(),
      authors: ['빈재홍'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const PostDetailPage = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <ContentDetailPage post={post} basePath="posts" />;
};

export default PostDetailPage;
