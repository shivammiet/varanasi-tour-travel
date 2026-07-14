import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are served locally from /public/images — no remote
  // patterns needed. Add entries back here only if you reintroduce
  // externally-hosted images.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
