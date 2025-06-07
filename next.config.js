/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel自動デプロイ用設定
  // output: 'export', // Vercelでは不要
  trailingSlash: true,
  
  // 画像最適化（Vercel対応）
  images: {
    unoptimized: false, // Vercelの画像最適化を使用
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ['@/components', '@/types'],
  },
  
  // コンパイラ最適化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // セキュリティヘッダー（静的エクスポート時は無効）
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'strict-origin-when-cross-origin',
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()',
  //         },
  //       ],
  //     },
  //   ]
  // },
  
  // バンドル分析（開発時）
  webpack: (config, { dev, isServer }) => {
    // プロダクションビルドでのバンドル分析
    if (!dev && !isServer && process.env.ANALYZE === 'true') {
      try {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        )
      } catch (e) {
        console.warn('webpack-bundle-analyzer not installed, skipping bundle analysis')
      }
    }
    
    return config
  },
}

module.exports = nextConfig