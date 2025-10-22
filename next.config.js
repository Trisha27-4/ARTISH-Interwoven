/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Digital-Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Digital-Portfolio' : ''
}

module.exports = nextConfig

