'use client'

import { useEffect, useRef } from 'react'

export default function OptimizedClientAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // パフォーマンス最適化のためのデバウンス処理
    const isClient = typeof window !== 'undefined'
    if (!isClient) return

    // 軽量化されたフェードイン観察
    const fadeinSections = document.querySelectorAll('.fadein-section')
    
    if (fadeinSections.length === 0) return

    // 軽量化されたIntersection Observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein-visible')
          // 一度アニメーションしたら監視を停止してパフォーマンス向上
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1, // より軽い監視
      rootMargin: '0px 0px -20px 0px' // 軽量化
    })
    
    fadeinSections.forEach(section => {
      observerRef.current?.observe(section)
    })

    // モバイル向けタッチ最適化を削除（問題の原因）
    // 従来のpassiveイベントリスナーは削除

    // ボタンのクリック効果も軽量化
    const handleButtonClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement
      button.style.transform = 'scale(0.95)'
      setTimeout(() => {
        button.style.transform = ''
      }, 150)
    }
    
    const allButtons = document.querySelectorAll('.line-btn, .mail-btn, .more-btn, .service-btn')
    allButtons.forEach(button => {
      button.addEventListener('click', handleButtonClick, { passive: true })
    })

    // クリーンアップ関数
    return () => {
      observerRef.current?.disconnect()
      allButtons.forEach(button => {
        button.removeEventListener('click', handleButtonClick)
      })
    }
  }, [])

  return null
}