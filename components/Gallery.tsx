'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'


const galleryImages = [
  { id: 1, src: '/images/treatment-botox.png', title: 'Botox Treatment', category: 'Anti-Aging' },
  { id: 2, src: '/images/treatment-fillers.png', title: 'Dermal Fillers', category: 'Fillers' },
  { id: 3, src: '/images/treatment-hydrafacial.png', title: 'HydraFacial', category: 'Skin Care' },
  { id: 4, src: '/images/treatment-prp.png', title: 'PRP Therapy', category: 'Regenerative' },
  { id: 5, src: '/images/treatment-laser.png', title: 'Laser Treatment', category: 'Laser' },
  { id: 6, src: '/images/treatment-microneedling.png', title: 'Microneedling', category: 'Skin Care' },
  { id: 7, src: '/images/clinic-interior.png', title: 'Our Clinic', category: 'Clinic' },
  { id: 8, src: '/images/doctor-about.png', title: 'Consultation', category: 'Doctor' },
  { id: 9, src: '/images/blog-1.png', title: 'Skin Rejuvenation', category: 'Skin Care' },
]

const categories = ['All', 'Anti-Aging', 'Fillers', 'Skin Care', 'Laser', 'Clinic']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Gallery
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Work & Results
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A curated selection of treatments, results, and clinic moments showcasing the art and
            science of aesthetic medicine.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C9A35A] text-white shadow-[0_4px_15px_rgba(201,163,90,0.3)]'
                  : 'bg-[#F8F8F8] text-[#555555] border border-[#E8E0D5] hover:border-[#C9A35A] hover:text-[#C9A35A]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 reveal">
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="relative mb-5 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(i)}
            >
              <div className={`relative w-full ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={32} className="text-white mb-2" />
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {img.title}
                </p>
                <span
                  className="text-[#E8D5A3] text-xs mt-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C9A35A] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#C9A35A] transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p
                className="text-white font-semibold"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {filtered[lightboxIndex].title}
              </p>
              <p
                className="text-[#C9A35A] text-sm mt-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {filtered[lightboxIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
