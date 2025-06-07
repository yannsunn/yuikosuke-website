'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../../styles/privacy.css'

export default function PrivacyPage() {
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

    // ポリシーセクションのホバーエフェクトを強化
    const policySections = document.querySelectorAll('.policy-section')
    policySections.forEach(section => {
      const handleMouseEnter = () => {
        ;(section as HTMLElement).style.transform = 'translateY(-5px)'
        ;(section as HTMLElement).style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)'
      }
      
      const handleMouseLeave = () => {
        ;(section as HTMLElement).style.transform = 'translateY(0)'
        ;(section as HTMLElement).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)'
      }
      
      section.addEventListener('mouseenter', handleMouseEnter)
      section.addEventListener('mouseleave', handleMouseLeave)
    })

    // フェードインの時間差を設定
    const sections = document.querySelectorAll('section')
    sections.forEach((section, index) => {
      ;(section as HTMLElement).style.animationDelay = (index * 0.1) + 's'
    })

    return () => {
      fadeInObserver.disconnect()
    }
  }, [])

  return (
    <div style={{ overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
      <Header title="プライバシーポリシー" />
      
      <main>
        <section className="policy-lead fadein-section">
          <h2>個人情報保護方針</h2>
          <p>
            <b>このサイトは油井宏介が運営しています。</b><br/>
            当サイトでは、お客様の個人情報の保護に万全を尽くします。<br/>
            ウェブサイトおよび各種サービスのご利用に際してお預かりする個人情報について、以下の方針に従い適切に取り扱います。
          </p>
        </section>

        <section className="policy-section fadein-section">
          <h3>個人情報の取得と利用目的</h3>
          <p>
            お問い合わせやサービスのお申込みの際に必要な範囲で個人情報を取得いたします。取得した情報は、お問い合わせへの回答や資料送付、サービス提供など、明示した目的の範囲内で利用いたします。
          </p>
        </section>
        <section className="policy-section fadein-section">
          <h3>個人情報の管理</h3>
          <p>
            お預かりした個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・漏洩等を防止するために適切な安全管理措置を講じます。
          </p>
        </section>
        <section className="policy-section fadein-section">
          <h3>個人情報の第三者提供</h3>
          <p>
            お客様の同意がある場合、法令に基づく場合等を除き、第三者に開示・提供いたしません。
          </p>
        </section>
        <section className="policy-section fadein-section">
          <h3>個人情報の安全対策</h3>
          <p>
            セキュリティ対策を万全に講じ、SSL等の暗号化技術やアクセス権管理などを実施しています。
          </p>
        </section>
        <section className="policy-section fadein-section">
          <h3>ご本人による照会・訂正・削除等の請求</h3>
          <p>
            お客様がご自身の個人情報の照会・訂正・削除等を希望される場合は、下記お問い合わせ窓口までご連絡ください。ご本人確認の上、速やかに対応いたします。
          </p>
        </section>
        <section className="policy-section fadein-section">
          <h3>法令遵守とプライバシーポリシーの見直し</h3>
          <p>
            個人情報の取扱いに関して適用される日本の法令、規範を遵守し、内容を適宜見直し改善に努めます。
          </p>
        </section>
        <section className="policy-contact fadein-section">
          <h3>お問い合わせ窓口</h3>
          <p>
            個人情報に関するお問い合わせは、<a href="/contact">お問い合わせページ</a>よりLINEまたはメールでご連絡ください。<br/>
            迅速かつ適切に対応いたします。
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}