'use client'

import { useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import InstagramEmbed with no SSR to avoid hydration mismatch
const InstagramEmbed = dynamic(() => import('./InstagramEmbed'), { ssr: false })

// Real Instagram posts from @drfareenaasghar
// You can replace these URLs with actual Instagram post URLs from the account
const instagramPostUrls = [
  'https://www.instagram.com/p/C9rK8xhSZxL/',
  'https://www.instagram.com/p/C9kL2mhSwM9/',
  'https://www.instagram.com/p/C9cX7tSS1Zk/',
  'https://www.instagram.com/p/C9VY3pSSlKx/',
  'https://www.instagram.com/p/C9M4KlSSZL2/',
  'https://www.instagram.com/p/C9BsX8SS7pK/',
]

const instagramCaptions = [
  'Botox & Anti-Aging: Natural, elegant results that enhance your beauty.',
  'Dermal Fillers: Sculpting beauty with precision and artistry.',
  'PRP Therapy: Revolutionary hair restoration at the cellular level.',
  'Laser Treatments: Advanced technology for flawless skin.',
  'HydraFacial: Ultimate skin rejuvenation and hydration.',
  'Microneedling: Collagen induction for youthful, glowing skin.',
]

export default function Instagram() {
  useEffect(() => {
    // Reprocess Instagram embeds when component mounts
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-white to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <div
            className="text-sm font-semibold tracking-widest text-[#C9A35A] uppercase mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Follow Our Journey
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Instagram <span className="text-[#C9A35A]">Feed</span>
          </h2>
          <p
            className="text-[#666666] text-lg max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Real transformations and exclusive content from Dr. Fareena&apos;s aesthetic clinic. Follow @drfareenaasghar for daily updates.
          </p>

          {/* Follow Button */}
          <a
            href="https://instagram.com/drfareenaasghar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#E4405F] via-[#DC2743] to-[#CC2366] text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Follow on Instagram
          </a>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {instagramPostUrls.map((url, index) => (
            <div
              key={index}
              className="flex justify-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full max-w-sm">
                <InstagramEmbed
                  url={url}
                  caption={instagramCaptions[index] || 'Check out this transformation'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p
            className="text-[#666666] mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Want to see more? Visit our full Instagram gallery or schedule a consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/drfareenaasghar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#C9A35A] text-[#C9A35A] rounded-full font-semibold hover:bg-[#C9A35A] hover:text-white transition-all"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              View More Posts
            </a>
            <a
              href="/book-appointment"
              className="px-8 py-3 bg-[#C9A35A] text-white rounded-full font-semibold hover:bg-[#B8932B] transition-all"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
