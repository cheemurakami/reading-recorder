/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
      },
    ],
  },
};

export default nextConfig;
