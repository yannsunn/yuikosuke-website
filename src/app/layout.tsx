import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '油井宏介 | ファイナンシャルプランナー',
  description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#1976d2',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}