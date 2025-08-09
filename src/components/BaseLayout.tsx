'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OptimizedClientAnimation from '@/components/OptimizedClientAnimation'
import type { BaseComponentProps } from '@/types'

interface BaseLayoutProps extends BaseComponentProps {
  title: string
  showAnimation?: boolean
}

export default function BaseLayout({ 
  title, 
  children, 
  className = '',
  showAnimation = true 
}: BaseLayoutProps) {
  // ヘッダータイトルを短くしてモバイルでも見やすく
  const displayTitle = title === 'FPコンサルティング' 
    ? '油井宏介 | ファイナンシャルプランナー' 
    : title;
    
  return (
    <>
      {showAnimation && <OptimizedClientAnimation />}
      <div className={`layout-container ${className}`}>
        <Header title={displayTitle} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}