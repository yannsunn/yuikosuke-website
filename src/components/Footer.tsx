'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { footerNavigationItems } from '@/components/Navigation'

export default function Footer() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    // ホームページの場合は完全一致
    if (path === '/') {
      return pathname === '/'
    }
    // その他のページは前方一致でチェック（サブページも考慮）
    return pathname.startsWith(path)
  }
  
  return (
    <footer className="fade-in">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>油井宏介</h3>
          <p>ファイナンシャルプランナー 油井宏介</p>
        </div>
        <div className="footer-links">
          {footerNavigationItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={isActive(item.href) ? 'active' : ''}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <p>東京都・神奈川県を中心にサポート</p>
          <p>kosuke.yui@brightreach.co.jp</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; 2024 油井宏介 All Rights Reserved.</small>
      </div>
    </footer>
  )
}