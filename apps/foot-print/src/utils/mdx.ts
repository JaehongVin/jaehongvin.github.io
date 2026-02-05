import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Post, PostMeta, TocItem } from '@/types/post';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getAllPosts = async () => {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
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

  return posts;
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

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

export const getAllSlugs = async (): Promise<string[]> => {
  const files = fs.readdirSync(POSTS_PATH);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
};

export const getAllCategories = async (): Promise<string[]> => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return categories.sort();
};

export const getAllTags = async (): Promise<string[]> => {
  const posts = await getAllPosts();
  const tags = [...new Set(posts.flatMap((post) => post.tags))];

  return tags.sort();
};

export const extractToc = (content: string): TocItem[] => {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];

  let match: RegExpExecArray | null = headingRegex.exec(content);
  while (match !== null) {
    const hashes = match[1];
    const text = match[2];

    if (!hashes || !text) {
      match = headingRegex.exec(content);
      continue;
    }

    const level = hashes.length as 2 | 3;
    const title = text.trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ id, title, level });
    match = headingRegex.exec(content);
  }

  return toc;
};
