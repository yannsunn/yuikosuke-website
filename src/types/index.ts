// 共通型定義

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface NavigationItem {
  href: string
  label: string
  isExternal?: boolean
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon?: string
  features?: string[]
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  location?: string
  rating?: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface ContactMethod {
  type: 'line' | 'email' | 'phone'
  label: string
  value: string
  description?: string
  availability?: string
}

export interface CompanyInfo {
  name: string
  representative: string
  address: string
  phone?: string
  email: string
  businessHours?: string
  establishedYear?: number
}

// SEO関連の型
export interface StructuredData {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    '@type': string
    addressCountry: string
    addressRegion: string
    addressLocality: string
    streetAddress: string
  }
  founder?: {
    '@type': string
    name: string
  }
  sameAs?: string[]
}

// ユーティリティ型
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>

// コンポーネントプロップス
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimationProps {
  delay?: number
  duration?: number
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

// API関連の型（将来拡張用）
export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  consent: boolean
}