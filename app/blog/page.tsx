import { SearchBar } from '@/components/SearchBar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Get all MDX files from the content directory
const getAllPosts = () => {
  const files = fs.readdirSync(CONTENT_DIR);
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(CONTENT_DIR, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category || 'Article',
        date: data.date,
        readTime: data.readTime || '5 min read',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Knowledge <span className="text-gradient">Repository</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Insights, tutorials, and thoughts on modern web development, ERP systems, and industrial automation.
          </p>
        </div>

        <SearchBar posts={posts} />
      </div>
    </div>
  );
}