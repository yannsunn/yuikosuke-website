import type { NavigationItem } from '@/types'

// Centralized navigation items - Single source of truth
export const navigationItems: NavigationItem[] = [
  { href: '/', label: 'トップ' },
  { href: '/services', label: 'サービス' },
  { href: '/about', label: 'プロフィール' },
  { href: '/contact', label: 'お問い合わせ' },
]

export const footerNavigationItems: NavigationItem[] = [
  ...navigationItems,
  { href: '/privacy', label: 'プライバシーポリシー' },
]