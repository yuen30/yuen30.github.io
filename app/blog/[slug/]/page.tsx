import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    try {
        const { default: Post } = await import(`@/content/${slug}.mdx`);

        return (
            <main className="min-h-screen relative">
                <div className="mesh-bg opacity-30">
                    <div className="mesh-blob bg-indigo-600/20 top-[10%] left-[10%]" />
                    <div className="mesh-blob bg-purple-600/20 bottom-[20%] right-[15%]" />
                </div>

                <Navbar />

                <div className="relative z-10 pt-32 pb-20 px-6">
                    <article className="max-w-3xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-12 transition-colors group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>

                        <div className="prose prose-invert prose-indigo lg:prose-xl max-w-none">
                            <Post />
                        </div>
                    </article>
                </div>

                <Footer />
            </main>
        );
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 text-center">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <p className="text-white/40 mb-8">The article you are looking for does not exist.</p>
                    <Link href="/" className="btn-primary">Return Home</Link>
                </div>
            </div>
        );
    }
}

export async function generateStaticParams() {
    // In a real app, you'd read the file system here
    // For now, let's return the slug we just created
    return [{ slug: 'building-modern-portfolio' }];
}
