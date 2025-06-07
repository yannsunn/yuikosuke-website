import Image from 'next/image'
import type { ComponentProps } from 'react'

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, 'placeholder' | 'blurDataURL'> {
  lazy?: boolean
  quality?: number
}

// 1x1透明ピクセルのbase64エンコード
const TRANSPARENT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// 低解像度ブラープレースホルダー
const BLUR_PLACEHOLDER = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rsr1PzDhXTvfQ=`

export default function OptimizedImage({ 
  lazy = true, 
  quality = 85,
  priority = false,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      quality={quality}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
      style={{
        ...props.style,
        objectFit: props.style?.objectFit || 'cover',
      }}
      loading={lazy && !priority ? 'lazy' : 'eager'}
      onLoad={(e) => {
        // パフォーマンス最適化: 画像の読み込み完了をマーク
        if (typeof window !== 'undefined' && 'performance' in window) {
          performance.mark(`image-loaded-${props.src}`)
        }
        props.onLoad?.(e)
      }}
    />
  )
}