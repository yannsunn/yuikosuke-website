'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../../styles/services.css'

export default function ServicesPage() {
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

    // サービスカードの遅延アニメーション
    const serviceCards = document.querySelectorAll('.service')
    serviceCards.forEach((card, index) => {
      ;(card as HTMLElement).style.setProperty('--card-index', index.toString())
      
      const handleMouseEnter = () => {
        ;(card as HTMLElement).style.transform = 'translateY(-8px)'
        ;(card as HTMLElement).style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.12)'
      }
      
      const handleMouseLeave = () => {
        ;(card as HTMLElement).style.transform = ''
        ;(card as HTMLElement).style.boxShadow = ''
      }
      
      const handleClick = (e: Event) => {
        if ((e.target as HTMLElement).tagName === 'A') return
        
        const ctaSection = document.querySelector('.cta')
        if (ctaSection) {
          window.scrollTo({
            top: (ctaSection as HTMLElement).offsetTop - 60,
            behavior: 'smooth'
          })
        }
      }
      
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
      card.addEventListener('click', handleClick)
      ;(card as HTMLElement).style.cursor = 'pointer'
    })

    return () => {
      fadeInObserver.disconnect()
    }
  }, [])

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="サービス" />
      
      <main>
        <section className="service fadein-section" id="business-protection">
          <h2>事業保証プランニング</h2>
          <p>経営者・個人事業主様の「もしも」に備える資金・保険設計を、専門知識であなたの立場に立って一緒に考えます。事業継続のための最適なプランをご提案します。</p>
        </section>

        <section className="service fadein-section" id="welfare-retirement">
          <h2>福利厚生・退職設計</h2>
          <p>従業員満足度を高める福利厚生や退職金準備も、企業規模やニーズに合わせて最適なプランをご提案。社員の笑顔が会社の未来をつくります。</p>
        </section>

        <section className="service fadein-section" id="inheritance-succession">
          <h2>相続・事業承継</h2>
          <p>大切な資産・想いを次世代へしっかりつなぐため、相続税対策や遺言書作成、事業承継も個別にサポートします。</p>
        </section>

        <section className="service fadein-section" id="insurance-consulting">
          <h2>保険コンサルティング</h2>
          <p>生命保険・医療保険・損害保険の見直しや新規加入も、中立的な立場で最適なプランをご提案します。</p>
        </section>

        <section className="service fadein-section" id="asset-building">
          <h2>資産形成</h2>
          <p>教育資金・老後資金・夢の実現に向けた貯蓄・運用アドバイスもお任せください。あなたのライフプランに寄り添います。</p>
        </section>

        <section className="service fadein-section" id="housing-loan">
          <h2>住宅ローンアドバイザー</h2>
          <p>マイホーム購入や借り換え時の最適なローン選びを、住宅ローンアドバイザーとしてサポート。金利選択から返済プランまで、あなたの状況に最適な提案をいたします。</p>
        </section>

        <section className="service fadein-section" id="corporate-consulting">
          <h2>法人コンサルティング</h2>
          <p>法人向けの財務戦略、節税対策、企業保険の最適化など、中小企業の経営者様の資金繰りや将来設計をトータルでサポートします。</p>
        </section>

        <section className="cta fadein-section">
          <Link href="/contact" className="line-btn">LINEで相談</Link>
          <p>「何から始めればいいかわからない」という方も大歓迎です。<br/>まずはメールでご相談ください：<a href="mailto:kosuke.yui@brightreach.co.jp">kosuke.yui@brightreach.co.jp</a></p>
        </section>
      </main>

      <Footer />
    </div>
  )
}