import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
