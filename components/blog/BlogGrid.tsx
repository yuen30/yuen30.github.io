import { getAllPosts } from '@/lib/posts';
import { BlogGridClient } from './BlogGridClient';

export async function BlogGrid() {
  const posts = await getAllPosts();
  return <BlogGridClient posts={posts.slice(0, 4)} />;
}
