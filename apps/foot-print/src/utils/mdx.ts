import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Post, PostMeta, TocItem } from '@/types/post';

type ContentDir = 'posts' | 'notes';

const getContentPath = (contentDir: ContentDir) =>
  path.join(process.cwd(), 'content', contentDir);

//* 범용 콘텐츠 함수
const getAllContent = async (contentDir: ContentDir) => {
  const contentPath = getContentPath(contentDir);
  const files = fs.readdirSync(contentPath);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const slug = file.replace('.mdx', '');

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
      } satisfies PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const getContentBySlug = async (
  contentDir: ContentDir,
  slug: string,
): Promise<Post | null> => {
  const filePath = path.join(getContentPath(contentDir), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    tags: data.tags || [],
    content,
  };
};

const getAllContentSlugs = async (contentDir: ContentDir) => {
  const contentPath = getContentPath(contentDir);
  const files = fs.readdirSync(contentPath);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
};

const getAllContentCategories = async (contentDir: ContentDir) => {
  const items = await getAllContent(contentDir);
  const categories = [...new Set(items.map((item) => item.category))];

  return categories.sort();
};

const getAllContentTags = async (contentDir: ContentDir) => {
  const items = await getAllContent(contentDir);
  const tags = [...new Set(items.flatMap((item) => item.tags))];

  return tags.sort();
};

//* Posts
export const getAllPosts = () => getAllContent('posts');
export const getPostBySlug = (slug: string) => getContentBySlug('posts', slug);
export const getAllSlugs = () => getAllContentSlugs('posts');
export const getAllCategories = () => getAllContentCategories('posts');
export const getAllTags = () => getAllContentTags('posts');

//* Notes
export const getAllNotes = () => getAllContent('notes');
export const getNoteBySlug = (slug: string) => getContentBySlug('notes', slug);
export const getAllNoteSlugs = () => getAllContentSlugs('notes');
export const getAllNoteCategories = () => getAllContentCategories('notes');
export const getAllNoteTags = () => getAllContentTags('notes');

export const extractToc = (content: string): TocItem[] => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;

  return Array.from(content.matchAll(headingRegex))
    .filter(([, hashes, text]) => hashes && text)
    .map(([, hashes, text]) => {
      const title = text!.trim();

      return {
        id: title
          .toLowerCase()
          .replace(/[^a-z0-9가-힣\s-]/g, '')
          .replace(/\s+/g, '-'),
        title,
        level: hashes!.length as 2 | 3,
      };
    });
};
