'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../../styles/about.css'

export default function AboutPage() {
  useEffect(() => {
    // フェードイン要素の観察
    const fadeinSections = document.querySelectorAll('.fadein-section')
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein-visible')
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    })
    
    fadeinSections.forEach(section => {
      fadeInObserver.observe(section)
    })

    // 強みセクションのホバーエフェクト強化
    const strengthItems = document.querySelectorAll('.strengths li')
    strengthItems.forEach(item => {
      const handleMouseEnter = () => {
        ;(item as HTMLElement).style.transform = 'translateY(-5px)'
        ;(item as HTMLElement).style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'
      }
      
      const handleMouseLeave = () => {
        ;(item as HTMLElement).style.transform = 'translateY(0)'
        ;(item as HTMLElement).style.boxShadow = 'var(--shadow-sm)'
      }
      
      item.addEventListener('mouseenter', handleMouseEnter)
      item.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      fadeInObserver.disconnect()
    }
  }, [])

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="プロフィール" />
      
      <main>
        <section className="hero fadein-section">
          <div className="hero-container">
            <div className="hero-image-modern">
              <Image 
                src="/yuikosuke.jpg" 
                alt="プロフィール写真" 
                width={280}
                height={380}
                className="hero-photo-modern animated-hero-photo"
                priority
              />
            </div>
            <div className="hero-text">
              <h2>油井宏介</h2>
              <p>ファイナンシャルプランナー</p>
            </div>
          </div>
        </section>

        <section className="message fadein-section">
          <h2>ご挨拶</h2>
          <p>
            はじめまして。<br/>
            私はこれまで、保険・資産形成・事業保障など幅広い分野で多くのお客様の人生やビジネスに伴走してきました。<br/>
            「何から相談していいかわからない」「自分に合ったプランが知りたい」——そんな方こそ、ぜひお気軽にご相談ください。<br/>
            <br/>
            専門知識と誠実なヒアリングで、<br/>
            あなたの未来に寄り添う"身近なパートナー"でありたいと考えています。
          </p>
        </section>

        <section className="strengths fadein-section">
          <h2>私の強み・大切にしていること</h2>
          <ul>
            <li>公的資格と豊富な実務経験による「安心」のご提案</li>
            <li>保険・資産・事業・相続までワンストップでサポート</li>
            <li>LINEで気軽に相談できる親しみやすさ</li>
            <li>お客様一人ひとりの想いに寄り添う誠実な対応</li>
          </ul>
        </section>

        <section className="service-summary fadein-section">
          <h2>提供できるサービス</h2>
          <ul>
            <li><b>事業保証プランニング</b>：経営者・個人事業主様の「もしも」に備える資金・保険設計</li>
            <li><b>福利厚生・退職設計</b>：従業員満足度を高める福利厚生や退職金準備のご提案</li>
            <li><b>相続・事業承継</b>：大切な資産・想いを次世代へつなぐサポート</li>
            <li><b>保険コンサルティング</b>：生命保険・医療保険・損害保険の見直し・最適化</li>
            <li><b>資産形成</b>：教育資金・老後資金・夢の実現に向けた貯蓄・運用アドバイス</li>
            <li><b>住宅ローン</b>：マイホーム購入・借り換え時の最適なローン選び</li>
          </ul>
        </section>

        <section className="qualifications fadein-section">
          <h2>保有資格</h2>
          <ul>
            <li>2級ファイナンシャル・プランニング技能士</li>
            <li>生命保険協会認定トータル・ライフ・コンサルタント（TLC）</li>
            <li>住宅ローンアドバイザー</li>
            <li>その他、業務に関連する各種資格を取得</li>
          </ul>
        </section>

        <section className="company-info fadein-section">
          <h2>会社情報（所属）</h2>
          <table>
            <tbody>
              <tr><th>所在地</th><td>〒104-0043 東京都中央区湊1-8-11 八丁堀エイトビル6階</td></tr>
              <tr><th>代表者</th><td>代表取締役社長　青柳 雄太郎</td></tr>
              <tr><th>設立</th><td>2012年9月（創業）</td></tr>
              <tr><th>事業内容</th><td>保険代理店事業、法人・個人向けファイナンシャルコンサルティング事業</td></tr>
              <tr><th>連絡先</th><td>Tel: 03-6222-7277 / Fax: 03-3297-6076 / E-mail: <a href="mailto:kosuke.yui@brightreach.co.jp">kosuke.yui@brightreach.co.jp</a></td></tr>
            </tbody>
          </table>
        </section>

        <section className="cta fadein-section">
          <h2>まずはLINEでお気軽にご相談ください！</h2>
          <Link href="/contact" className="line-btn">LINEで相談する</Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}