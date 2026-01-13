import fs from 'fs';
import path from 'path';
import type { ComponentType } from 'react';

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  author?: string;
  readTime?: string;
}

export interface PostModule {
  default: ComponentType;
  metadata: PostMeta;
}

export interface PostSummary extends PostMeta {
  slug: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function getPostModule(slug: string): Promise<PostModule> {
  return (await import(`@/content/${slug}.mdx`)) as PostModule;
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const slugs = getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await getPostModule(slug);
      return {
        slug,
        ...metadata,
      } satisfies PostSummary;
    })
  );

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
