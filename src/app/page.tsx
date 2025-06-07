import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientAnimation from '@/components/ClientAnimation'
import CTAButton from '@/components/CTAButton'
import '../styles/index.css'

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
  keywords: ['ファイナンシャルプランナー', '保険相談', '資産形成', '無料相談'],
  openGraph: {
    title: '油井宏介 | ファイナンシャルプランナー',
    description: '保険・資産形成・事業保障までトータルにサポート。一人ひとりの人生に「安心」と「希望」を届けます。',
    url: 'https://brightreach-hp.vercel.app',
    siteName: '油井宏介 FP事務所',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function HomePage() {

  return (
    <>
      <ClientAnimation />
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="FPコンサルティング" />
      
      <main>
        <section className="hero fadein-section">
          <div className="hero-container">
            <div className="hero-image-modern">
              <Image 
                src="/yuikosuke.jpg" 
                alt="ファイナンシャルプランナー油井宏介のプロフィール写真" 
                width={280}
                height={380}
                className="hero-photo-modern animated-hero-photo"
                priority
                sizes="(max-width: 600px) 180px, (max-width: 900px) 220px, 280px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rsr1PzDhXTvfQ=="
              />
            </div>
            <div className="hero-text">
              <h2>あなたの人生に、安心と希望を</h2>
              <p className="tagline">一人ひとりの夢や目標に合わせた最適な<strong>ファイナンシャルプラン</strong>をご提案します</p>
              <p>専門のファイナンシャルプランナーが、保険・資産形成・事業保障までトータルにサポートします。複雑な金融商品の選択や将来設計のお悩みを解決し、明るい未来への架け橋となります。</p>
              <div className="hero-buttons">
                <CTAButton variant="line" href="/contact">LINEで無料相談</CTAButton>
                <CTAButton variant="service" href="/services">サービス詳細を見る</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="intro fadein-section">
          <h2>「お金」の専門家として、あなたの未来をサポートします</h2>
          <div className="intro-content">
            <p>
              人生のさまざまな局面で直面する「お金」の問題や将来への不安。<br/>
              「老後のために今できることは？」「子どもの教育資金はどうすれば？」「自分に合った保険プランは？」<br/>
              <strong>そんな悩みを一人で抱え込まないでください。</strong>
            </p>
            <p>
              私たちはあなたの人生に寄り添い、専門知識とアドバイスで最適な道筋を一緒に考えていきます。<br/>
              お客様一人ひとりの状況や目標に合わせたオーダーメイドのプランニングで、「安心」と「希望」に満ちた未来を築くお手伝いをいたします。
            </p>
          </div>
        </section>

        <section className="benefits fadein-section">
          <h2>ご相談いただくメリット</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>一人ひとりに合わせた<br/>オーダーメイドプラン</h3>
              <p>あなたの価値観やライフプランに合わせた、最適な金融商品とプランニングをご提案します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>中立的な視点での<br/>アドバイス</h3>
              <p>特定の金融機関に縛られない、お客様の利益を最優先した中立的なアドバイスを提供します。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h3>気軽に相談できる<br/>アクセシビリティ</h3>
              <p>LINEを活用した気軽な相談環境で、いつでもどこでもお金の悩みを解決できます。</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>長期的な<br/>伴走サポート</h3>
              <p>一度きりの提案で終わらず、ライフステージの変化に合わせた継続的なサポートを行います。</p>
            </div>
          </div>
        </section>

        <section className="strengths fadein-section">
          <h2>3つの強み</h2>
          <ol>
            <li><b>専門知識と実績による安心サポート</b><br/>公的資格と豊富な経験で、あなたに最適なプランをご提案。複雑な金融商品の中から、本当に必要なものだけを厳選します。</li>
            <li><b>生涯に寄り添うトータルプランニング</b><br/>保険・資産・事業・相続までワンストップでサポート。人生の各ステージでシームレスなサービスを提供します。</li>
            <li><b>親しみやすさと迅速な対応</b><br/>LINEで気軽に相談できる身近なパートナー。専門家特有の難解さを排除し、わかりやすく丁寧な説明を心がけています。</li>
          </ol>
        </section>

        <section className="services fadein-section">
          <h2>提供サービス</h2>
          <ul className="services-grid">
            <li>事業保証プランニング</li>
            <li>福利厚生・退職設計</li>
            <li>相続・事業承継</li>
            <li>保険コンサルティング</li>
            <li>資産形成</li>
            <li>住宅ローンアドバイザー</li>
            <li>法人コンサルティング</li>
          </ul>
          <CTAButton variant="more" href="/services">サービス詳細を見る</CTAButton>
        </section>

        <section className="testimonials fadein-section">
          <h2>お客様の声</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="quote">「複雑な保険の見直しをわかりやすく説明してくれました。無駄な保険料が大幅に削減できて感謝しています。」</div>
              <div className="author">東京都 40代 会社員 T.S様</div>
            </div>
            <div className="testimonial">
              <div className="quote">「事業保障について相談しましたが、自分では気づかなかったリスクまで丁寧に指摘してくれて助かりました。」</div>
              <div className="author">神奈川県 50代 経営者 K.M様</div>
            </div>
            <div className="testimonial">
              <div className="quote">「子どもの教育資金について相談したところ、具体的な数字とプランを提示してくれて、将来への不安が解消されました。」</div>
              <div className="author">埼玉県 30代 共働き夫婦 Y.T様</div>
            </div>
          </div>
        </section>

        <section className="about fadein-section">
          <h2>プロフィール</h2>
          <p>お金の悩みや将来設計に寄り添い、人生に「安心」と「希望」を届けることを使命としています。2級ファイナンシャル・プランニング技能士、生命保険協会認定トータル・ライフ・コンサルタント（TLC）、住宅ローンアドバイザーなど、多数の資格を保有。どんな些細なことでも、まずはご相談ください。</p>
          <CTAButton variant="more" href="/about">プロフィールを見る</CTAButton>
        </section>

        <section className="faq fadein-section">
          <h2>よくあるご質問</h2>
          <div className="faq-item">
            <h3>相談は無料ですか？</h3>
            <p>はい、初回相談は無料です。お客様の状況やニーズをヒアリングし、最適なプランをご提案いたします。</p>
          </div>
          <div className="faq-item">
            <h3>どのような準備をしていけばよいですか？</h3>
            <p>特別な準備は必要ありません。現在のお悩みや目標についてお聞かせいただければ、必要に応じて資料などをご案内いたします。</p>
          </div>
          <div className="faq-item">
            <h3>相談から契約までどのくらいかかりますか？</h3>
            <p>お客様のペースに合わせて進めていきます。じっくり検討されたい方には、十分な検討期間を設けることも可能です。</p>
          </div>
        </section>

        <section className="cta fadein-section">
          <h2>今すぐLINEでお気軽にご相談ください</h2>
          <p>初回相談は無料です。あなたの「安心」と「希望」のある未来のために、まずは気軽にご連絡ください。</p>
          <div className="cta-buttons">
            <CTAButton variant="line" href="/contact">LINEで相談</CTAButton>
            <CTAButton variant="mail" href="mailto:kosuke.yui@brightreach.co.jp" external>メールで問い合わせ</CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  )
}