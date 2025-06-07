import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yuikosuke-website.vercel.app'),
  title: {
    template: '%s | 油井宏介',
    default: '油井宏介 | ファイナンシャルプランナー'
  },
  description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  keywords: ['ファイナンシャルプランナー', '保険', '資産形成', '事業保障', '油井宏介', 'FP', '資産運用', 'ライフプラン'],
  authors: [{ name: '油井宏介' }],
  creator: '油井宏介',
  publisher: '油井宏介',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yuikosuke-website.vercel.app',
    title: '油井宏介 | ファイナンシャルプランナー',
    description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポート。',
    siteName: '油井宏介 FP事務所',
  },
  twitter: {
    card: 'summary_large_image',
    title: '油井宏介 | ファイナンシャルプランナー',
    description: 'ファイナンシャルプランナー油井宏介の公式サイト。',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0, // アクセシビリティ向上とスクロール競合回避
  userScalable: true, // iOS Safari スクロール最適化
  themeColor: '#1976d2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}