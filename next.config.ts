import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',        // leave empty unless using a non-standard port
        pathname: '/**', // allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ],
  },
};

export default nextConfig;
