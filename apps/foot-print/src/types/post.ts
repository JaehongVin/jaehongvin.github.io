export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}
