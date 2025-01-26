/** @type {import('next').NextConfig} */
import remarkFrontmatter from 'remark-frontmatter'
import remarkPrism from 'remark-prism'

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkPrism, remarkFrontmatter],
          },
        },
      ],
    })

    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default nextConfig
