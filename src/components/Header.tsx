'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ title }: { title: string }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname === path) return true
    return false
  }

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link href="/" className={isActive('/') ? 'active' : ''}>
          トップ
        </Link>
        <Link href="/services" className={isActive('/services') ? 'active' : ''}>
          サービス
        </Link>
        <Link href="/about" className={isActive('/about') ? 'active' : ''}>
          プロフィール
        </Link>
        <Link href="/contact" className={isActive('/contact') ? 'active line-btn' : 'line-btn'}>
          LINEで相談
        </Link>
      </nav>
    </header>
  )
}