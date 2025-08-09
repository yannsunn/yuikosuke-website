import type { Metadata } from 'next'
import Image from 'next/image'
import BaseLayout from '@/components/BaseLayout'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import '../styles/home.css'

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  keywords: ['ファイナンシャルプランナー', '保険相談', '資産形成', '無料相談'],
  openGraph: {
    title: '油井宏介 | ファイナンシャルプランナー',
    description: '保険・資産形成・事業保障までトータルにサポート。一人ひとりの人生に「安心」と「希望」を届けます。',
    url: 'https://yuikosuke-website.vercel.app',
    siteName: '油井宏介 | ファイナンシャルプランナー',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function HomePage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "相談は無料ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、初回相談は無料です。お客様の状況をお伺いして、最適なプランをご提案します。"
        }
      },
      {
        "@type": "Question",
        "name": "どのような準備が必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "特別な準備は不要です。現在のお悩みや目標をお聞かせください。"
        }
      },
      {
        "@type": "Question",
        "name": "オンライン相談は可能ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、オンラインでの相談も対応しています。お気軽にご連絡ください。"
        }
      }
    ]
  }

  return (
    <BaseLayout title="FPコンサルティング">
      <StructuredData data={faqData} />
      <main>
        <section className="hero fade-in">
          <div className="hero-image">
            <Image 
              src="/yuikosuke.jpg" 
              alt="ファイナンシャルプランナー油井宏介" 
              width={300}
              height={400}
              priority={true}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQAAwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAMFBv/EACQQAAIBAwMEAwAAAAAAAAAAAAECAwAEERIhMQUTQVEiYYH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAAMBAAAAAAAAAAAAAAAAAAECEQD/2gAMAwEAAhEDEQA/AOgublLdC8hOBzgZrN/lF7cflUlOPiqRxFzhQWPsUK3B1rn//9k="
              quality={75}
              sizes="(max-width: 768px) 200px, 300px"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '300px'
              }}
            />
          </div>
          <div className="hero-content">
            <h1>あなたの人生に、<br/>安心と希望を</h1>
            <p className="tagline">専門のファイナンシャルプランナーが<br/>人生設計をサポート</p>
            <p>保険・資産形成・事業保障まで、<br/>あなたに最適なプランをご提案します。</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">無料相談はこちら</Link>
              <Link href="/services" className="btn btn-secondary">サービス詳細</Link>
            </div>
          </div>
        </section>

        <section className="intro fade-in">
          <h2>お金の専門家として、あなたの未来をサポート</h2>
          <p className="text-center">
            老後資金、教育資金、保険の見直しなど、<br/>
            お金の悩みを一人で抱え込まないでください。<br/>
            専門知識で最適なプランをご提案します。
          </p>
        </section>

        <section className="benefits fade-in">
          <h2>ご相談いただくメリット</h2>
          <div className="grid grid-4">
            <div className="card benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>オーダーメイド</h3>
              <p>あなたに最適なプラン</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M12 2L3.09 7.26C2.36 7.72 2 8.54 2 9.45v4.11c0 5.05 3.51 9.78 8.35 10.94a2 2 0 003.3 0C18.49 23.34 22 18.61 22 13.56V9.45c0-.9-.64-1.73-1.91-2.19L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>中立的アドバイス</h3>
              <p>お客様利益最優先</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>オンライン相談</h3>
              <p>いつでもどこでも</p>
            </div>
            <div className="card benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>継続サポート</h3>
              <p>長期的な伴走</p>
            </div>
          </div>
        </section>


        <section className="services fade-in">
          <h2>提供サービス</h2>
          <ul className="services-list">
            <li>事業保証プランニング</li>
            <li>福利厚生・退職設計</li>
            <li>相続・事業承継</li>
            <li>保険コンサルティング</li>
            <li>資産形成</li>
            <li>住宅ローンアドバイザー</li>
            <li>法人コンサルティング</li>
          </ul>
        </section>

        <section className="approach fade-in">
          <h2>私のアプローチ</h2>
          <div className="approach-content">
            <div className="approach-item">
              <h3>丁寧なヒアリング</h3>
              <p>お客様の価値観、家族構成、将来の目標まで、<br/>しっかりとお話を伺います。</p>
            </div>
            <div className="approach-item">
              <h3>わかりやすい説明</h3>
              <p>専門用語を使わず、<br/>図表やシミュレーションを用いて分かりやすくご説明します。</p>
            </div>
            <div className="approach-item">
              <h3>継続的なサポート</h3>
              <p>一度きりの提案で終わらず、<br/>ライフステージの変化に合わせてサポートします。</p>
            </div>
          </div>
        </section>

        <section className="about fade-in">
          <h2>ファイナンシャルプランナー<br/>油井宏介について</h2>
          <div className="profile-content">
            <div className="profile-credentials">
              <h3>保有資格</h3>
              <ul>
                <li><strong>2級ファイナンシャル・プランニング技能士</strong></li>
                <li><strong>生命保険協会認定トータル・ライフ・コンサルタント（TLC）</strong></li>
                <li><strong>住宅ローンアドバイザー</strong></li>
              </ul>
            </div>
            <p><strong>「あなたの人生に、本当に必要なものを。」</strong></p>
            <p>お客様一人ひとりの状況や目標は全く違います。<br/>だからこそ、画一的な提案はいたしません。<br/>あなたに適した解策を一緒に考えていきます。</p>
            <p>小さな疑問から大きな決断まで、どんなことでもお気軽にご相談ください。</p>
          </div>
        </section>


        <section className="faq fade-in">
          <h2>よくあるご質問</h2>
          <div className="faq-item">
            <h3>相談は無料ですか？</h3>
            <p>はい、初回相談は無料です。<br/>お客様の状況やニーズをヒアリングし、<br/>最適なプランをご提案いたします。</p>
          </div>
          <div className="faq-item">
            <h3>どのような準備をしていけばよいですか？</h3>
            <p>特別な準備は必要ありません。<br/>現在のお悩みや目標についてお聞かせいただければ、<br/>必要に応じて資料などをご案内いたします。</p>
          </div>
          <div className="faq-item">
            <h3>相談から契約までどのくらいかかりますか？</h3>
            <p>お客様のペースに合わせて進めていきます。<br/>じっくり検討されたい方には、<br/>十分な検討期間を設けることも可能です。</p>
          </div>
        </section>

        <section className="cta fade-in text-center">
          <h2>まずは無料相談から始めませんか？</h2>
          <p>お金に関するご相談をお受けしています。<br/>まずはお気軽にお声がけください。</p>
          <Link href="/contact" className="btn btn-primary">無料相談を申し込む</Link>
        </section>
      </main>
    </BaseLayout>
  )
}