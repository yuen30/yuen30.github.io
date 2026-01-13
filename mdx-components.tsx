import type { MDXComponents } from 'mdx/types';

const baseComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-10 mb-6 text-white">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mt-10 mb-4 text-white">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-white/80 leading-relaxed mb-6">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
      {children}
    </ul>
  ),
  code: ({ children }) => (
    <code className="bg-white/10 text-indigo-200 px-2 py-1 rounded text-sm">
      {children}
    </code>
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...baseComponents,
    ...components,
  };
}
