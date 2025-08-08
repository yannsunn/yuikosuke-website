/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的エクスポート設定
  output: 'export',
  trailingSlash: true,
  
  // 画像最適化（静的エクスポート用）
  images: {
    unoptimized: true, // 静的エクスポート時は最適化を無効化
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
  
  // セキュリティヘッダー
  // 注意: 静的エクスポート時はホスティングサービス側で設定が必要
  // Vercelの場合はvercel.jsonで、Netlifyの場合は_headersファイルで設定
  
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