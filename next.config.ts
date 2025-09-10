import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // サーバーの安定化設定
  experimental: {
    // メモリ使用量を制限
    memoryBasedWorkers: false,
    // ファイル監視の最適化
    optimizePackageImports: ['@heroicons/react'],
  },
  // ビルド時の最適化
  swcMinify: true,
  // 開発サーバーの安定化
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
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
