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
    },
    {
      id: 'welfare-retirement',
      title: '福利厚生・退職設計',
      description: '従業員満足度を高める福利厚生や退職金準備も、企業規模やニーズに合わせて最適なプランをご提案。社員の笑顔が会社の未来をつくります。',
      icon: '🎯',
    },
    {
      id: 'inheritance-succession',
      title: '相続・事業承継',
      description: '大切な資産・想いを次世代へしっかりつなぐため、相続税対策や遺言書作成、事業承継も個別にサポートします。',
      icon: '🤝',
    },
    {
      id: 'insurance-consulting',
      title: '保険コンサルティング',
      description: '生命保険・医療保険・損害保険の見直しや新規加入も、中立的な立場で最適なプランをご提案します。',
      icon: '📋',
    },
    {
      id: 'asset-building',
      title: '資産形成',
      description: '教育資金・老後資金・夢の実現に向けた貯蓄・運用アドバイスもお任せください。あなたのライフプランに寄り添います。',
      icon: '📈',
    },
    {
      id: 'housing-loan',
      title: '住宅ローンアドバイザー',
      description: 'マイホーム購入や借り換え時の最適なローン選びを、住宅ローンアドバイザーとしてサポート。金利選択から返済プランまで、あなたの状況に最適な提案をいたします。',
      icon: '🏠',
    },
    {
      id: 'corporate-consulting',
      title: '法人コンサルティング',
      description: '法人向けの財務戦略、節税対策、企業保険の最適化など、中小企業の経営者様の資金繰りや将来設計をトータルでサポートします。',
      icon: '💼',
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
            </article>
          ))}
        </div>


        <SharedCTA />
      </main>
    </BaseLayout>
  )
}