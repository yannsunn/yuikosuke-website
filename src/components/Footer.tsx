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
          <p>〒104-0043 東京都中央区湊1-8-11</p>
          <p>八丁堀エイトビル6階</p>
          <p>Tel: 03-6222-7277</p>
          <p>Email: <a href="mailto:kosuke.yui@brightreach.co.jp">kosuke.yui@brightreach.co.jp</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>&copy; 2024 FP Office All Rights Reserved.</small>
      </div>
    </footer>
  )
}