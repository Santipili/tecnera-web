import type { NextConfig } from "next";

const IS_GH_PAGES_EXPORT = process.env.GITHUB_PAGES_BUILD === "true";
const BASE_PATH = IS_GH_PAGES_EXPORT ? "/temporario" : "";

const nextConfig: NextConfig = {
  ...(IS_GH_PAGES_EXPORT ? { output: "export" as const } : {}),
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
