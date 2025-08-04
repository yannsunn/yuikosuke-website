'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationItems } from '@/components/Navigation'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // ホームページの場合は完全一致
    if (path === '/') {
      return pathname === '/'
    }
    // その他のページは前方一致でチェック（サブページも考慮）
    return pathname.startsWith(path)
  }

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        {navigationItems.map((item) => {
          const isContactButton = item.href === '/contact'
          const baseClassName = isContactButton ? 'primary-btn' : ''
          const activeClassName = isActive(item.href) ? 'active' : ''
          const className = [baseClassName, activeClassName].filter(Boolean).join(' ')
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={className || undefined}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}