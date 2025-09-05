import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    { source: "/", destination: "/introduction", permanent: false },
  ],
};

export default nextConfig;
