import type { ReactNode } from 'react';
import clsx from 'clsx';

interface BlogMeta {
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
}

interface BlogLayoutProps {
  title: string;
  excerpt?: string;
  metadata?: BlogMeta;
  breadcrumbs?: ReactNode;
  heroSlot?: ReactNode;
  actions?: ReactNode;
  contentClassName?: string;
  children: ReactNode;
}

export function BlogLayout({
  title,
  excerpt,
  metadata,
  breadcrumbs,
  heroSlot,
  actions,
  contentClassName,
  children,
}: BlogLayoutProps) {
  const showMeta = metadata?.category || metadata?.date || metadata?.readTime;

  return (
    <article className="max-w-5xl mx-auto px-6 py-12">
      {breadcrumbs}

      <header className="mb-12 space-y-6">
        {showMeta && (
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/50">
            {metadata?.category && (
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300">
                {metadata.category}
              </span>
            )}
            {metadata?.date && (
              <time dateTime={metadata.date} className="text-white/60">
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {metadata?.readTime && <span>{metadata.readTime}</span>}
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          {excerpt && <p className="text-xl text-white/70 max-w-3xl">{excerpt}</p>}
        </div>

        {(metadata?.author || actions) && (
          <div className="flex items-center justify-between border-y border-white/10 py-6">
            <div className="text-sm text-white/60">
              {metadata?.author ? `Written by ${metadata.author}` : ''}
            </div>
            {actions}
          </div>
        )}

        {heroSlot}
      </header>

      <div className={clsx(contentClassName ?? 'prose prose-invert max-w-none')}>
        {children}
      </div>
    </article>
  );
}
