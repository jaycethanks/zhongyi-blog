/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','raw.githubusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: '/file/:path*',
        destination: 'http://localhost:8989/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
