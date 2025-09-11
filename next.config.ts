import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 動的Next.jsアプリ用の設定（@netlify/plugin-nextjs対応）
  images: {
    unoptimized: true,
  },
  // ESLintを無効化（デプロイ用）
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
