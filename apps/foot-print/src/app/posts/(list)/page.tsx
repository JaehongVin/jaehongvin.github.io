import { cn } from '@common/ui/lib/utils';
import { Suspense } from 'react';
import { getAllCategories, getAllPosts, getAllTags } from '@/utils/mdx';
import { LeftSidebar } from './_components/LeftSidebar';
import { PostFilter } from './_components/PostFilter';

const PostListPage = async () => {
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
    <>
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
    </>
  );
};

export default PostListPage;
