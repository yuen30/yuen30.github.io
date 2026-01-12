'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { BlogCard } from '@/components/blog/BlogCard';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
}

interface SearchBarProps {
  posts: BlogPost[];
}

export const SearchBar = ({ posts }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  // Filter posts based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(lowercasedTerm) ||
      post.excerpt.toLowerCase().includes(lowercasedTerm) ||
      post.category.toLowerCase().includes(lowercasedTerm)
    );

    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  const handleClear = () => {
    setSearchTerm('');
  };

  const hasResults = filteredPosts.length > 0;
  const hasSearched = searchTerm.length > 0;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-white/40" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setTimeout(() => setIsSearching(false), 200)}
            placeholder="Search articles by title, category, or content..."
            className="w-full pl-12 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            aria-label="Search blog posts"
          />
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/40 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {(hasSearched && !hasResults) ? (
        <div className="text-center py-12">
          <p className="text-white/60 text-lg">No articles found matching "{searchTerm}"</p>
          <p className="text-white/40 mt-2">Try different keywords or browse all articles</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};