import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentDetailPage } from '@/components/content/ContentDetailPage';
import { SITE_NAME, SITE_URL } from '@/constants/seo';
import { getAllNoteSlugs, getNoteBySlug } from '@/utils/mdx';

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    return { title: '노트를 찾을 수 없습니다' };
  }

  const noteUrl = `${SITE_URL}/notes/${slug}`;

  return {
    title: note.title,
    description: note.description,
    keywords: [note.category, ...note.tags],
    alternates: {
      canonical: noteUrl,
    },
    openGraph: {
      type: 'article',
      url: noteUrl,
      title: note.title,
      description: note.description,
      siteName: SITE_NAME,
      locale: 'ko_KR',
      publishedTime: new Date(note.date).toISOString(),
      authors: ['빈재홍'],
      tags: note.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.description,
    },
  };
}

const NoteDetailPage = async ({ params }: DetailPageProps) => {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return <ContentDetailPage post={note} basePath="notes" />;
};

export default NoteDetailPage;
