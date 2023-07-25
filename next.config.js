/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placeimg.com',
      },{
        protocol:'https',
        hostname:'raw.githubusercontent.com'
      }
    ],
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
