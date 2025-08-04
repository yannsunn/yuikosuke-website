'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

interface CTAButtonProps {
  variant: 'primary' | 'mail' | 'service' | 'more'
  href: string
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
}

const variantClasses = {
  primary: 'btn btn-primary',
  mail: 'btn btn-primary mail-btn', 
  service: 'btn btn-primary',
  more: 'btn btn-secondary'
}

const sizeClasses = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg'
}

export default function CTAButton({ 
  variant, 
  href, 
  children, 
  className = '',
  size = 'md',
  external = false,
  ...props 
}: CTAButtonProps) {
  const baseClass = variantClasses[variant]
  const sizeClass = sizeClasses[size]
  const combinedClass = [baseClass, sizeClass, className].filter(Boolean).join(' ')

  if (external || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a 
        href={href} 
        className={combinedClass}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link 
      href={href} 
      className={combinedClass}
      {...props}
    >
      {children}
    </Link>
  )
}