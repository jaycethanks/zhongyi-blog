// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // domains: ['placeimg.com', 'raw.githubusercontent.com', '**.cnblogs.com', 'img2023.cnblogs.com', 'img2022.cnblogs.com', 'img2021.cnblogs.com'],
  },
  async rewrites() {
    return [
      {
        source: '/file/:path*',
        destination: `${process.env.NEXT_PUBLIC_NGINX_SERVER}/:path*`, // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
// module.exports = withBundleAnalyzer(nextConfig);
