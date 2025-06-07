'use client'

import { useEffect, useRef } from 'react'

export default function ClientAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const isCleanedUpRef = useRef(false)

  useEffect(() => {
    // クライアント環境チェック
    if (typeof window === 'undefined') return
    
    // 重複実行防止
    if (isCleanedUpRef.current) return
    
    // フェードイン要素の軽量観察
    const fadeinSections = document.querySelectorAll('.fadein-section')
    
    if (fadeinSections.length === 0) return

    // 軽量化されたIntersection Observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein-visible')
          // パフォーマンス向上: 一度表示したら監視停止
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1, // 軽量化
      rootMargin: '0px 0px -20px 0px', // 軽量化
      // iOS Safari最適化
      root: null
    })
    
    fadeinSections.forEach(section => {
      observerRef.current?.observe(section)
    })

    // ボタンのクリック効果（最適化版）
    const allButtons = document.querySelectorAll('.line-btn, .mail-btn, .more-btn, .service-btn')
    
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement
      // CSS transformの直接操作でパフォーマンス向上
      button.style.transform = 'scale(0.95)'
      requestAnimationFrame(() => {
        setTimeout(() => {
          button.style.transform = ''
        }, 150)
      })
    }
    
    // パッシブリスナーでイベント追加
    allButtons.forEach(button => {
      button.addEventListener('click', handleClick, { passive: true })
    })

    // 🚫 問題のあったpassiveテストコードとtouchリスナーを完全削除
    // これらがスクロール問題の主要原因でした

    // クリーンアップ関数
    return () => {
      if (isCleanedUpRef.current) return
      isCleanedUpRef.current = true
      
      observerRef.current?.disconnect()
      allButtons.forEach(button => {
        button.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return null
}