import BaseLayout from '@/components/BaseLayout'
import SharedCTA from '@/components/SharedCTA'
import '../../styles/services.css'

export default function ServicesPage() {
  const services = [
    {
      id: 'business-protection',
      title: '事業保証プランニング',
      description: '経営者・個人事業主様の「もしも」に備える資金・保険設計を、専門知識であなたの立場に立って一緒に考えます。事業継続のための最適なプランをご提案します。',
      icon: '🛡️',
      benefits: ['事業リスクの最小化', '資金繰りの安定化', '従業員の安心確保'],
      details: '経営者保険、倒産防止共済、事業資金準備など多角的にサポート'
    },
    {
      id: 'welfare-retirement',
      title: '福利厚生・退職設計',
      description: '従業員満足度を高める福利厚生や退職金準備も、企業規模やニーズに合わせて最適なプランをご提案。社員の笑顔が会社の未来をつくります。',
      icon: '🎯',
      benefits: ['従業員満足度向上', '優秀な人材の確保', '節税効果の最大化'],
      details: '企業型確定拠出年金、退職金制度、各種福利厚生制度の導入支援'
    },
    {
      id: 'inheritance-succession',
      title: '相続・事業承継',
      description: '大切な資産・想いを次世代へしっかりつなぐため、相続税対策や遺言書作成、事業承継も個別にサポートします。',
      icon: '🤝',
      benefits: ['円滑な資産承継', '相続税の最適化', '家族の安心確保'],
      details: '遺言書作成支援、相続税シミュレーション、事業承継計画の策定'
    },
    {
      id: 'insurance-consulting',
      title: '保険コンサルティング',
      description: '生命保険・医療保険・損害保険の見直しや新規加入も、中立的な立場で最適なプランをご提案します。',
      icon: '📋',
      benefits: ['保険料の最適化', '保障内容の充実', '無駄な支出削減'],
      details: '複数社の保険商品から最適な組み合わせをご提案'
    },
    {
      id: 'asset-building',
      title: '資産形成',
      description: '教育資金・老後資金・夢の実現に向けた貯蓄・運用アドバイスもお任せください。あなたのライフプランに寄り添います。',
      icon: '📈',
      benefits: ['計画的な資産形成', 'リスク分散', '税制優遇活用'],
      details: 'NISA・iDeCo活用、投資信託、不動産投資などトータルサポート'
    },
    {
      id: 'housing-loan',
      title: '住宅ローンアドバイザー',
      description: 'マイホーム購入や借り換え時の最適なローン選びを、住宅ローンアドバイザーとしてサポート。金利選択から返済プランまで、あなたの状況に最適な提案をいたします。',
      icon: '🏠',
      benefits: ['金利負担の軽減', '返済計画の最適化', 'ライフプランとの調整'],
      details: '複数金融機関の比較、団体信用生命保険の選定、借り換えシミュレーション'
    },
    {
      id: 'corporate-consulting',
      title: '法人コンサルティング',
      description: '法人向けの財務戦略、節税対策、企業保険の最適化など、中小企業の経営者様の資金繰りや将来設計をトータルでサポートします。',
      icon: '💼',
      benefits: ['キャッシュフロー改善', '節税対策', '企業価値向上'],
      details: '財務分析、資金調達支援、M&A支援、事業計画策定サポート'
    }
  ];

  return (
    <BaseLayout title="サービス">
      <main>
        {/* Hero Section */}
        <section className="services-hero fade-in">
          <div className="hero-content">
            <h1>プロフェッショナルサービス</h1>
            <p className="hero-subtitle">あなたの人生と事業に寄り添う、総合的なファイナンシャルプランニング</p>
            <div className="hero-features">
              <div className="feature-pill">🎯 個別カスタマイズ</div>
              <div className="feature-pill">📊 データ分析</div>
              <div className="feature-pill">🤝 長期サポート</div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="service-overview fade-in">
          <h2>7つの専門サービス</h2>
          <p className="overview-text">お客様のライフステージや事業フェーズに合わせて、最適なソリューションをご提供します</p>
        </section>
        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.id} className="service-card fade-in" id={service.id} data-number={String(index + 1).padStart(2, '0')}>
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-benefits">
                <h3>主なメリット</h3>
                <ul>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details">
                <p>{service.details}</p>
              </div>
              <a href="#contact-form" className="service-cta">詳しく相談する →</a>
            </article>
          ))}
        </div>

        {/* Service Process */}
        <section className="service-process fade-in">
          <h2>サービス提供の流れ</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>無料相談</h3>
              <p>まずはお気軽にご相談ください。現状の確認と課題の整理を行います。</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>分析・診断</h3>
              <p>詳細な分析を行い、最適なプランをご提案します。</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>実行支援</h3>
              <p>プランの実行を全面的にサポートし、定期的なフォローアップを行います。</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="services-faq fade-in">
          <h2>よくあるご質問</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Q. 相談料はかかりますか？</h3>
              <p>初回相談は無料です。お客様の状況をお聞きし、どのようなサポートができるかご説明します。</p>
            </div>
            <div className="faq-item">
              <h3>Q. どのサービスから始めればいいですか？</h3>
              <p>まずは総合的な診断から始めることをお勧めします。現状分析の上で、優先順位をご提案します。</p>
            </div>
            <div className="faq-item">
              <h3>Q. 法人と個人、両方の相談は可能ですか？</h3>
              <p>はい、可能です。経営者様の場合、法人と個人を総合的に見ることで、より効果的なプランニングが可能です。</p>
            </div>
            <div className="faq-item">
              <h3>Q. オンライン相談は可能ですか？</h3>
              <p>はい、オンラインでの相談も承っております。全国どこからでもご相談いただけます。</p>
            </div>
          </div>
        </section>

        <SharedCTA />
      </main>
    </BaseLayout>
  )
}