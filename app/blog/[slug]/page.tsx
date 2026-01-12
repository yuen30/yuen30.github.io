import { ShareButtons } from '@/components/ShareButtons';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// Define the path to your content directory
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
        frontmatter: data,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return posts;
};

// Get all post slugs for static generation
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Define props type for the component
interface PostPageProps {
  params: {
    slug: string;
  };
}

// Main component
export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  // Find the post that matches the slug
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound(); // This triggers the 404 page
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  // Construct the full URL for sharing
  const fullUrl = `https://taweechai.dev/blog/${slug}`;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-bold uppercase tracking-widest">
            {data.category || 'Article'}
          </span>
          <time dateTime={data.date}>
            {new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <span>{data.readTime || '5 min read'}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {data.title}
        </h1>
        
        <p className="text-xl text-white/70 mb-8">
          {data.excerpt}
        </p>
        
        <div className="flex items-center justify-between py-6 border-y border-white/10">
          <div className="text-sm text-white/60">
            Written by {data.author || 'Taweechai Yuenyang'}
          </div>
          
          <ShareButtons 
            title={data.title} 
            url={fullUrl} 
            className="flex gap-2"
          />
        </div>
      </header>
      
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
      
      <footer className="mt-16 pt-8 border-t border-white/10">
        <ShareButtons 
          title={data.title} 
          url={fullUrl} 
          className="flex gap-2"
        />
      </footer>
    </article>
  );
}