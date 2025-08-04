import Link from 'next/link'
import BaseLayout from '@/components/BaseLayout'

export default function NotFound() {
  return (
    <BaseLayout title="ページが見つかりません">
      <main className="text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div>
          <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ページが見つかりません</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
            お探しのページは移動または削除された可能性があります。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary">
              ホームに戻る
            </Link>
            <Link href="/services" className="btn btn-secondary">
              サービス一覧
            </Link>
          </div>
        </div>
      </main>
    </BaseLayout>
  )
}