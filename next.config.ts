import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '97.74.89.204',
        // port: '4000',
        // pathname: '/*/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
