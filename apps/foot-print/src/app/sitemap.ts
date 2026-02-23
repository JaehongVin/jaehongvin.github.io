import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/seo';
import { getAllPosts } from '@/utils/mdx';

export const dynamic = 'force-static';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...postEntries,
  ];
};

export default sitemap;
