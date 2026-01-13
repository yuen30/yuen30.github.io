"use client";

import Link from 'next/link';
import { motion } from "motion/react";
import { BlogCard } from './BlogCard';
import type { PostSummary } from '@/lib/posts';

interface BlogGridClientProps {
  posts: PostSummary[];
}

export function BlogGridClient({ posts }: BlogGridClientProps) {
  return (
    <section id="articles" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Latest <span className="text-indigo-400">Articles</span>
          </h2>
          <p className="text-white/50 max-w-xl">
            Thoughts, insights, and practical guides on building high-performance web applications and mastering modern tech.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors flex items-center gap-2"
        >
          View all posts →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              category={post.category || 'Article'}
              date={new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
              readTime={post.readTime || '5 min read'}
              slug={post.slug}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
