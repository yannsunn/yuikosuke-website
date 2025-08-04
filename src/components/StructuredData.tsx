interface StructuredDataProps {
  data: any
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  )
}

// 組織の構造化データを生成
export function createOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: '油井宏介 ファイナンシャルプランナー',
    description: 'ファイナンシャルプランナー油井宏介の公式サイト。保険・資産形成・事業保障までトータルにサポートし、一人ひとりの人生に「安心」と「希望」を届けます。',
    url: 'https://yuikosuke-website.vercel.app',
    telephone: '',
    email: 'kosuke.yui@brightreach.co.jp',
    founder: {
      '@type': 'Person',
      name: '油井宏介'
    },
    sameAs: []
  }
}

// サービスページ用の構造化データ
export function createServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ファイナンシャルプランニングサービス',
    description: '保険・資産形成・事業保障などのファイナンシャルプランニングサービス',
    provider: {
      '@type': 'Person',
      name: '油井宏介'
    },
    areaServed: {
      '@type': 'Country',
      name: '日本'
    },
    serviceType: 'Financial Planning'
  }
}

// よくある質問の構造化データ
export function createFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}