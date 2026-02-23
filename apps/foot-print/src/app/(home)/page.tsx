import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SITE_DESCRIPTION, SITE_URL } from '@/constants/seo';
import { getAllCategories, getAllPosts, getAllTags } from '@/utils/mdx';
import { LeftSidebar } from './_components/LeftSidebar';
import { PostFilter } from './_components/PostFilter';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
};

const HomePage = async () => {
  const [posts, categories, tags] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllTags(),
  ]);

  const categoryCounts = categories.map((category) => ({
    name: category,
    count: posts.filter((post) => post.category === category).length,
  }));

  return (
    <div
      className={cn(
        'mx-auto flex w-full gap-px-24 px-16 py-24',
        'dt:max-w-px-1200',
      )}
    >
      <Suspense fallback={null}>
        <LeftSidebar
          categories={categoryCounts}
          tags={tags}
          totalCount={posts.length}
        />
      </Suspense>
      <main className={cn('min-w-0 flex-1', 'dt:max-w-px-900')}>
        <Suspense fallback={null}>
          <PostFilter posts={posts} />
        </Suspense>
      </main>
    </div>
  );
};

export default HomePage;
