'use client'

import { useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
  caption?: string
}

export default function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Process Instagram embed after component mounts
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [url])

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
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
