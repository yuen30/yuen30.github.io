import { Breadcrumb } from '@/components/Breadcrumb';
import { ShareButtons } from '@/components/ShareButtons';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { getAllPosts, getPostModule } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const { default: MDXContent, metadata } = await getPostModule(slug);
    const fullUrl = `https://taweechai.dev/blog/${slug}`;

    return (
      <BlogLayout
        title={metadata.title}
        excerpt={metadata.excerpt}
        metadata={metadata}
        breadcrumbs={
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: metadata.title || slug },
            ]}
          />
        }
        actions={<ShareButtons title={metadata.title} url={fullUrl} className="flex gap-2" />}
      >
        <MDXContent />

        <footer className="mt-16 pt-8 border-t border-white/10">
          <ShareButtons title={metadata.title} url={fullUrl} className="flex gap-2" />
        </footer>
      </BlogLayout>
    );
  } catch (error) {
    notFound();
  }
}
