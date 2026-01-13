declare module '*.mdx' {
  const MDXComponent: React.ComponentType;
  export const metadata: {
    title: string;
    date: string;
    excerpt: string;
    category?: string;
    author?: string;
    readTime?: string;
  };
  export default MDXComponent;
}
