/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/**', // Allows all paths on utfs.io
      },
    ],
  },
}

module.exports = nextConfig
