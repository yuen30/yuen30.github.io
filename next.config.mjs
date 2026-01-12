import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        mdxRs: true,
    },
    trailingSlash: true,
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig)
