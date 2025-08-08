import Link from 'next/link'
import BaseLayout from '@/components/BaseLayout'
import CTAButton from '@/components/CTAButton'
import '../../styles/contact.css'

export default function ContactPage() {
  return (
    <BaseLayout title="お問い合わせ">
      
      <main>
        <section className="contact-lead fade-in card-box">
          <h2>お問い合わせ</h2>
          <p>
            サービス内容に関するご質問やご相談、資料請求など、<br/>
            どんなことでもお気軽にご連絡ください。
          </p>
        </section>

        <section className="contact-methods fade-in">
          <div className="contact-box mail">
            <h3>メールで問い合わせ</h3>
            <div className="contact-content">
              <p className="mail-address">
                <a href="mailto:kosuke.yui@brightreach.co.jp" className="mail-link">kosuke.yui@brightreach.co.jp</a>
              </p>
              <p className="mail-description">
                お名前・ご連絡先・ご用件を明記の上、ご送信ください。<br/>
                通常1～2営業日以内にご返信いたします。
              </p>
            </div>
            <CTAButton variant="mail" href="mailto:kosuke.yui@brightreach.co.jp" external>
              メールで問い合わせる
            </CTAButton>
          </div>
        </section>

        <section className="contact-examples fade-in card-box">
          <h3>お問い合わせ内容の例</h3>
          <ul>
            <li>事業保障プランについて相談したい</li>
            <li>福利厚生の導入を検討している</li>
            <li>相続対策についてアドバイスがほしい</li>
            <li>保険の見直しをお願いしたい</li>
            <li>将来の資産形成について相談したい</li>
            <li>住宅ローンの借り換えを検討している</li>
            <li>その他（どのサービスを利用すべきかわからない 等）</li>
          </ul>
          <p>
            上記以外の内容や「何から始めればいいかわからない」といったご相談も大歓迎です。<br/>
            お客様の状況に合わせて丁寧にヒアリングし、<br/>
            最適なプランをご提案いたします。
          </p>
        </section>

        <section className="privacy-link fade-in card-box">
          <Link href="/privacy">▶ プライバシーポリシーはこちら</Link>
        </section>
      </main>
    </BaseLayout>
  )
}