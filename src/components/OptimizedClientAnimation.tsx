'use client'

import { useEffect, useRef } from 'react'

export default function OptimizedClientAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const isClient = typeof window !== 'undefined'
    if (!isClient) return

    // モバイル検出
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // モバイルでアニメーション大幅軽量化
    if (isMobile) {
      // モバイルでは即座に表示（アニメーション無効化）
      const fadeinSections = document.querySelectorAll('.fadein-section')
      fadeinSections.forEach(section => {
        section.classList.add('fadein-visible')
      })
      return
    }

    // デスクトップのみでIntersection Observer使用
    const fadeinSections = document.querySelectorAll('.fadein-section')
    if (fadeinSections.length === 0) return

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 要素ごとに遅延を設定してスタガーアニメーション効果
          setTimeout(() => {
            entry.target.classList.add('fadein-visible')
          }, index * 50)
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    fadeinSections.forEach(section => {
      observerRef.current?.observe(section)
    })

    // クリーンアップ関数
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return null
}