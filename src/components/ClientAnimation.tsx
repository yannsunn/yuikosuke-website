'use client'

import { useEffect } from 'react'

export default function ClientAnimation() {
  useEffect(() => {
    // フェードイン要素の観察
    const fadeinSections = document.querySelectorAll('.fadein-section')
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein-visible')
        }
      })
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    })
    
    fadeinSections.forEach(section => {
      fadeInObserver.observe(section)
    })

    // ボタンのクリック効果
    const allButtons = document.querySelectorAll('.line-btn, .mail-btn, .more-btn, .service-btn')
    
    const handleClick = (event: Event) => {
      const button = event.currentTarget as HTMLElement
      button.classList.add('clicked')
      setTimeout(() => button.classList.remove('clicked'), 300)
    }
    
    allButtons.forEach(button => {
      button.addEventListener('click', handleClick)
    })

    // パフォーマンス最適化: パッシブリスナー
    const passiveSupported = (() => {
      let passiveSupported = false
      try {
        const options = {
          get passive() {
            passiveSupported = true
            return false
          }
        } as AddEventListenerOptions
        const handler = () => {}
        window.addEventListener('test' as any, handler, options)
        window.removeEventListener('test' as any, handler, options)
      } catch (err) {
        passiveSupported = false
      }
      return passiveSupported
    })()

    // タッチ操作の最適化
    if (passiveSupported) {
      const passiveHandler = () => {}
      document.addEventListener('touchstart', passiveHandler, { passive: true })
      document.addEventListener('touchmove', passiveHandler, { passive: true })
    }

    return () => {
      fadeInObserver.disconnect()
      allButtons.forEach(button => {
        button.removeEventListener('click', handleClick)
      })
    }
  }, [])

  return null // このコンポーネントは何もレンダリングしない
}