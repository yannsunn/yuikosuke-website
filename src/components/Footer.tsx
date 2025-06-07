import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fadein-section">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>FP Office</h3>
          <p>ファイナンシャルプランナー 油井宏介</p>
        </div>
        <div className="footer-links">
          <Link href="/">トップ</Link>
          <Link href="/services">サービス</Link>
          <Link href="/about">プロフィール</Link>
          <Link href="/contact">LINEで相談</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </div>
        <div className="footer-contact">
          <p>お気軽にご相談ください</p>
          <p><a href="/contact">LINEで相談する</a></p>
          <p>初回相談無料</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; 2024 FP Office All Rights Reserved.</small>
      </div>
    </footer>
  )
}