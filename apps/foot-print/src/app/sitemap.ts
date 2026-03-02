import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/seo';
import { getAllNotes, getAllPosts } from '@/utils/mdx';

export const dynamic = 'force-static';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const [posts, notes] = await Promise.all([getAllPosts(), getAllNotes()]);

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const noteEntries = notes.map((note) => ({
    url: `${SITE_URL}/notes/${note.slug}`,
    lastModified: new Date(note.date),
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
    {
      url: `${SITE_URL}/notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...postEntries,
    ...noteEntries,
  ];
};

export default sitemap;
