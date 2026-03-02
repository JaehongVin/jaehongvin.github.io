import { cn } from '@common/ui/lib/utils';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContentFilter } from '@/components/content/ContentFilter';
import { LeftSidebar } from '@/components/content/LeftSidebar';
import { SITE_URL } from '@/constants/seo';
import { getAllNoteCategories, getAllNotes, getAllNoteTags } from '@/utils/mdx';

export const metadata: Metadata = {
  title: '노트',
  description: '짧은 기록과 메모를 모아둔 공간입니다.',
  alternates: {
    canonical: `${SITE_URL}/notes`,
  },
};

const NotesPage = async () => {
  const [notes, categories, tags] = await Promise.all([
    getAllNotes(),
    getAllNoteCategories(),
    getAllNoteTags(),
  ]);

  const categoryCounts = categories.map((category) => ({
    name: category,
    count: notes.filter((note) => note.category === category).length,
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
          totalCount={notes.length}
          basePath="notes"
        />
      </Suspense>
      <main className={cn('min-w-0 flex-1', 'dt:max-w-px-900')}>
        <Suspense fallback={null}>
          <ContentFilter posts={notes} basePath="notes" />
        </Suspense>
      </main>
    </div>
  );
};

export default NotesPage;
