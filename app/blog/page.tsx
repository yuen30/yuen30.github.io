import { Breadcrumb } from '@/components/Breadcrumb';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { SearchBar } from '@/components/SearchBar';
import { getAllPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getAllPosts();

  const searchPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || 'Article',
    date: post.date,
    readTime: post.readTime || '5 min read',
  }));

  return (
    <BlogLayout
      title="Knowledge Repository"
      excerpt="Insights, tutorials, and thoughts on modern web development, ERP systems, and industrial automation."
      breadcrumbs={<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />}
      contentClassName="space-y-12"
    >
      <SearchBar posts={searchPosts} />
    </BlogLayout>
  );
}
