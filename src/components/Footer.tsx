import Link from 'next/link'
import { footerNavigationItems } from '@/components/Navigation'

export default function Footer() {
  return (
    <footer className="fade-in">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>FP Office</h3>
          <p>ファイナンシャルプランナー 油井宏介</p>
        </div>
        <div className="footer-links">
          {footerNavigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
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
        <small>&copy; 2024 FP Office All Rights Reserved.</small>
      </div>
    </footer>
  )
}