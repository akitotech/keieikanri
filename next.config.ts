import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify用の設定（動的Next.jsアプリ）
  images: {
    unoptimized: true,
  },
  // ESLintを無効化（デプロイ用）
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ファイル監視の設定
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // 開発時のファイル監視を最適化
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
