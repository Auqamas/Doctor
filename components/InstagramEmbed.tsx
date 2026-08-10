'use client'

import { useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
  caption?: string
}

function ensureInstagramScript() {
  if (typeof window === 'undefined') return
  if ((window as any).instgrm) {
    ;(window as any).instgrm.Embeds.process()
    return
  }

  const existing = document.querySelector('script[src*="instagram.com/embed.js"]')
  if (existing) {
    existing.addEventListener('load', () => {
      ;(window as any).instgrm?.Embeds.process()
    })
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.instagram.com/embed.js'
  script.onload = () => {
    ;(window as any).instgrm?.Embeds.process()
  }
  document.body.appendChild(script)
}

export default function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ensureInstagramScript()
    const timer = window.setTimeout(() => {
      ;(window as any).instgrm?.Embeds.process()
    }, 400)
    return () => window.clearTimeout(timer)
  }, [url])

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '12px',
          margin: '0 auto',
          maxWidth: '540px',
          minWidth: '280px',
          width: '100%',
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
      {caption && (
        <p
          className="text-sm text-[#666666] mt-4 text-center max-w-md"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
