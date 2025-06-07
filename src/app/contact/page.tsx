'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../../styles/contact.css'

export default function ContactPage() {
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

    // カードボックスの遅延アニメーション
    const cardBoxes = document.querySelectorAll('.card-box')
    cardBoxes.forEach((card, index) => {
      ;(card as HTMLElement).style.setProperty('--card-index', index.toString())
      ;(card as HTMLElement).style.animationDelay = (index * 0.15) + 's'
    })
    
    // コンタクトボックスのホバーエフェクト強化
    const contactBoxes = document.querySelectorAll('.contact-box')
    contactBoxes.forEach(box => {
      const handleMouseEnter = () => {
        ;(box as HTMLElement).style.transform = 'translateY(-8px)'
        ;(box as HTMLElement).style.boxShadow = 'var(--shadow-lg)'
      }
      
      const handleMouseLeave = () => {
        ;(box as HTMLElement).style.transform = ''
        ;(box as HTMLElement).style.boxShadow = ''
      }
      
      box.addEventListener('mouseenter', handleMouseEnter)
      box.addEventListener('mouseleave', handleMouseLeave)
    })
    
    // 問い合わせ例リストのアニメーション
    const exampleItems = document.querySelectorAll('.contact-examples li')
    exampleItems.forEach((item, index) => {
      ;(item as HTMLElement).style.opacity = '0'
      ;(item as HTMLElement).style.transform = 'translateY(20px)'
      
      setTimeout(() => {
        ;(item as HTMLElement).style.transition = 'all 0.5s cubic-bezier(.25, .1, .25, 1.5)'
        ;(item as HTMLElement).style.opacity = '1'
        ;(item as HTMLElement).style.transform = 'translateY(0)'
      }, 300 + (index * 100))
    })
    
    // メールリンクのクリックイベント拡張
    const mailLinks = document.querySelectorAll('a[href^="mailto:"]')
    mailLinks.forEach(link => {
      const handleClick = () => {
        link.classList.add('pulse')
        setTimeout(() => link.classList.remove('pulse'), 500)
      }
      
      link.addEventListener('click', handleClick)
    })

    return () => {
      fadeInObserver.disconnect()
    }
  }, [])

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="お問い合わせ" />
      
      <main>
        <section className="contact-lead fadein-section card-box">
          <h2>お問い合わせ</h2>
          <p>
            サービス内容に関するご質問やご相談、資料請求など、どんなことでもお気軽にご連絡ください。
          </p>
        </section>

        <section className="contact-methods fadein-section">
          <div className="contact-box mail">
            <h3>メールで問い合わせ</h3>
            <div className="contact-content">
              <p className="mail-address">
                <a href="mailto:kosuke.yui@brightreach.co.jp" className="mail-link">kosuke.yui@brightreach.co.jp</a>
              </p>
              <p className="mail-description">
                お名前・ご連絡先・ご用件を明記の上、ご送信ください。
                <br/>通常1～2営業日以内にご返信いたします。
              </p>
            </div>
            <a href="mailto:kosuke.yui@brightreach.co.jp" className="mail-btn">
              <span className="mail-icon">✉</span> メールで問い合わせる
            </a>
          </div>
          <div className="contact-box line">
            <h3>LINEで問い合わせ</h3>
            <div className="contact-content">
              <p>
                LINEでのお問い合わせは迅速なご対応が可能です。
                ご質問やご相談など、お気軽にメッセージをお送りください。
              </p>
            </div>
            <a href="https://line.me/ja/" className="line-btn" target="_blank" rel="noopener">LINEで相談</a>
          </div>
        </section>

        <section className="contact-examples fadein-section card-box">
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
            上記以外の内容や「何から始めればいいかわからない」といったご相談も大歓迎です。
            お客様の状況に合わせて丁寧にヒアリングし、最適なプランをご提案いたします。
          </p>
        </section>

        <section className="privacy-link fadein-section card-box">
          <Link href="/privacy">▶ プライバシーポリシーはこちら</Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}