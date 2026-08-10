'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Zap, Droplets, Sparkles, Sun, Wind, Activity, Scissors, RefreshCw, Layers, CloudSun, Leaf } from 'lucide-react'
import { withBase } from '@/lib/paths'

const treatments = [
  {
    id: 1,
    title: 'Botox',
    description: 'Smooth fine lines and wrinkles with precision-placed botulinum toxin for a naturally refreshed, youthful appearance.',
    image: '/images/treatment-botox.png',
    icon: Zap,
    category: 'Anti-Aging',
  },
  {
    id: 2,
    title: 'Dermal Fillers',
    description: 'Restore lost volume and define facial contours with premium hyaluronic acid fillers for immediate, natural-looking results.',
    image: '/images/treatment-fillers.png',
    icon: Droplets,
    category: 'Volume Restoration',
  },
  {
    id: 3,
    title: 'HydraFacial',
    description: 'The ultimate skin resurfacing treatment that cleanses, extracts, and hydrates all skin types for a glowing complexion.',
    image: '/images/treatment-hydrafacial.png',
    icon: Sparkles,
    category: 'Skin Rejuvenation',
  },
  {
    id: 4,
    title: 'PRP Therapy',
    description: 'Harness your body\'s natural healing power with platelet-rich plasma therapy for skin and hair rejuvenation.',
    image: '/images/treatment-prp.png',
    icon: Activity,
    category: 'Regenerative',
  },
  {
    id: 5,
    title: 'Laser Hair Removal',
    description: 'Permanent hair reduction using advanced laser technology for smooth, silky skin on all body areas.',
    image: '/images/treatment-laser.png',
    icon: Sun,
    category: 'Laser',
  },
  {
    id: 6,
    title: 'Microneedling',
    description: 'Stimulate collagen production and improve skin texture with advanced micro-channeling technology.',
    image: '/images/treatment-microneedling.png',
    icon: Layers,
    category: 'Skin Renewal',
  },
  {
    id: 7,
    title: 'Chemical Peel',
    description: 'Reveal smoother, brighter skin by removing dead cells and stimulating cell renewal with medical-grade peels.',
    image: '/images/treatment-hydrafacial.png',
    icon: RefreshCw,
    category: 'Resurfacing',
  },
  {
    id: 8,
    title: 'Thread Lift',
    description: 'A minimally invasive facelift alternative using dissolvable threads to lift and tighten sagging skin.',
    image: '/images/treatment-fillers.png',
    icon: Wind,
    category: 'Lifting',
  },
  {
    id: 9,
    title: 'Lip Enhancement',
    description: 'Define, volumize and shape your lips with premium fillers for natural, beautiful results tailored to your face.',
    image: '/images/treatment-botox.png',
    icon: Leaf,
    category: 'Lips',
  },
  {
    id: 10,
    title: 'Carbon Laser Facial',
    description: 'The Hollywood Peel — deep cleanse pores, reduce oil, and improve skin tone for instantly radiant skin.',
    image: '/images/treatment-laser.png',
    icon: CloudSun,
    category: 'Laser',
  },
  {
    id: 11,
    title: 'Acne Treatment',
    description: 'Comprehensive acne management combining medical-grade treatments to clear breakouts and prevent scarring.',
    image: '/images/treatment-microneedling.png',
    icon: Scissors,
    category: 'Skin Health',
  },
  {
    id: 12,
    title: 'Skin Tightening',
    description: 'Non-surgical skin firming using advanced RF and ultrasound technology for visibly tighter, contoured skin.',
    image: '/images/treatment-prp.png',
    icon: Zap,
    category: 'Body Contouring',
  },
]

const categories = ['All', 'Anti-Aging', 'Skin Rejuvenation', 'Laser', 'Lifting', 'Regenerative']

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const sectionRef = useRef<HTMLElement>(null)

  const filtered = activeCategory === 'All'
    ? treatments
    : treatments.filter((t) => t.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)

  useEffect(() => {
    setVisibleCount(6)
  }, [activeCategory])

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
    <section id="treatments" ref={sectionRef} className="section-padding bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our Services
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Premium Treatments
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Tailored aesthetic treatments using the latest medical technology and premium products
            to help you look and feel your absolute best.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C9A35A] text-white shadow-[0_4px_15px_rgba(201,163,90,0.3)]'
                  : 'bg-white text-[#555555] border border-[#E8E0D5] hover:border-[#C9A35A] hover:text-[#C9A35A]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((treatment, i) => {
            const Icon = treatment.icon
            return (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#E8E0D5] hover:border-[#C9A35A]/30 transition-all duration-500 group reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={withBase(treatment.image)}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#C9A35A] text-white text-xs font-medium px-3 py-1 rounded-full" style={{ fontFamily: 'var(--font-sans)' }}>
                    {treatment.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F8F3E8] flex items-center justify-center group-hover:bg-[#C9A35A] transition-colors duration-300">
                      <Icon size={18} className="text-[#C9A35A] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3
                      className="text-lg font-bold text-[#222222]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {treatment.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-[#888888] leading-relaxed mb-5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {treatment.description}
                  </p>
                  <button
                    onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 text-sm font-semibold text-[#C9A35A] hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Book Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show more / Less buttons */}
        {filtered.length > 6 && (
          <div className="text-center mt-12">
            {visibleCount < filtered.length ? (
              <button
                onClick={() => setVisibleCount((v) => v + 6)}
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm font-semibold"
              >
                View All Treatments
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(6)}
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm font-semibold"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
