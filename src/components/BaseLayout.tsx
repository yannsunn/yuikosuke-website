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
  return (
    <>
      {showAnimation && <OptimizedClientAnimation />}
      <div className={`layout-container ${className}`}>
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}