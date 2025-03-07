/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://johnangusg.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/johnangusg.github.io' : '',
  trailingSlash: true, // Needed for GitHub Pages
}

module.exports = nextConfig