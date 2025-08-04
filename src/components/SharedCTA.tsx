import CTAButton from '@/components/CTAButton'
import type { BaseComponentProps } from '@/types'

interface SharedCTAProps extends BaseComponentProps {
  title?: string
  description?: string
  showMailButton?: boolean
  showContactButton?: boolean
  variant?: 'default' | 'highlight'
}

export default function SharedCTA({
  title = '今すぐお気軽にご相談ください',
  description = '初回相談は無料です。あなたの「安心」と「希望」のある未来のために、まずは気軽にご連絡ください。',
  showMailButton = true,
  showContactButton = true,
  variant = 'default',
  className = ''
}: SharedCTAProps) {
  const ctaClass = `cta ${variant === 'highlight' ? 'cta-highlight' : ''} ${className}`.trim()

  return (
    <section className={`${ctaClass} fade-in`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="cta-buttons">
        {showContactButton && (
          <CTAButton variant="primary" href="/contact">
            お問い合わせ
          </CTAButton>
        )}
        {showMailButton && (
          <CTAButton variant="mail" href="mailto:kosuke.yui@brightreach.co.jp" external>
            メールで問い合わせ
          </CTAButton>
        )}
      </div>
    </section>
  )
}