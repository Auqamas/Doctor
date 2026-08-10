'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, CheckCircle2, Star } from 'lucide-react'
import { withBase } from '@/lib/paths'
import Link from 'next/link'

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 2.5, suffix: 'K+', label: 'Happy Patients', decimals: 1 },
  { value: 20, suffix: '+', label: 'Treatments' },
  { value: 99, suffix: '%', label: 'Satisfaction Rate' },
]

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number
  suffix: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(decimals > 0 ? Number(current.toFixed(decimals)) : Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, decimals])

  const display = decimals > 0 ? count.toFixed(decimals) : String(count)

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-bold text-[#C9A35A]" style={{ fontFamily: 'var(--font-serif)' }}>
      {display}{suffix}
    </div>
  )
}

const homeHighlights = [
  'Premium aesthetic & dermatology clinic',
  'Advanced FDA-approved technology & products',
  'Personalized treatment plans for every patient',
  'Sterile, luxurious & patient-first environment',
  '20+ non-surgical aesthetic treatments',
  'Trusted by 2.5K+ happy patients',
]

const pageHighlights = [
  'Private consultation suites for every visit',
  'Medical-grade sterilization & safety protocols',
  'Latest laser, injectable & skin devices',
  'Calm, spa-inspired recovery spaces',
  'Transparent pricing & honest guidance',
  'Aftercare support for lasting results',
]

type AboutProps = {
  variant?: 'home' | 'page'
}

export default function About({ variant = 'home' }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isPage = variant === 'page'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const imageSrc = isPage ? '/images/treatment-laser.png' : '/images/treatment-botox.png'
  const imageAlt = isPage
    ? 'Advanced aesthetic treatment room at our clinic'
    : 'Premium aesthetic treatment experience at our clinic'
  const highlights = isPage ? pageHighlights : homeHighlights

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            About the Clinic
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {isPage ? 'Our Clinic Experience' : 'Where Science Meets Beauty'}
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {isPage
              ? 'Step inside a refined aesthetic destination built for comfort, privacy, and medically guided results — from first consultation to aftercare.'
              : 'A premium aesthetic clinic dedicated to natural rejuvenation, advanced skin care, and confidence-enhancing treatments in a calm, luxurious setting.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal-left relative">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-[#F8F3E8] rounded-[40px] -z-10" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src={withBase(imageSrc)}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl border border-[#C9A35A]/20">
                <Award size={28} className="text-[#C9A35A] mb-1" />
                <div className="text-xs font-semibold text-[#222222]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Premium
                </div>
                <div className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Aesthetic Clinic
                </div>
              </div>

              <div className="absolute -top-4 -left-4 glass rounded-2xl p-3 shadow-xl border border-[#C9A35A]/20">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} fill="#C9A35A" className="text-[#C9A35A]" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-[#222222] mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                  5.0 Rating
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <h3
              className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {isPage ? (
                <>
                  Designed for Comfort,
                  <span className="text-[#C9A35A]"> Built for Results</span>
                </>
              ) : (
                <>
                  A Modern Space for
                  <span className="text-[#C9A35A]"> Timeless Results</span>
                </>
              )}
            </h3>
            <p
              className="text-[#555555] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {isPage
                ? 'Every room in our clinic is planned around the patient journey — warm lighting, discreet consultation areas, and treatment spaces equipped with modern aesthetic technology. We keep the atmosphere calm and elegant so your visit feels restorative, never rushed.'
                : 'Our clinic is designed to feel serene, private, and refined — the ideal setting for aesthetic and dermatology care. From consultation to aftercare, every detail is thoughtfully planned so you feel comfortable, informed, and confident throughout your journey.'}
            </p>
            <p
              className="text-[#555555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {isPage
                ? 'Whether you are visiting for injectables, laser care, skin rejuvenation, or a full facial assessment, our team follows clear medical protocols with a personal touch. We focus on natural-looking outcomes, honest recommendations, and long-term skin health.'
                : 'We combine advanced technology with personalized protocols for anti-aging, skin rejuvenation, injectables, laser treatments, and more. Our focus is always natural-looking enhancement that respects your unique features and lifestyle.'}
            </p>

            <div className="mb-8">
              <h4
                className="text-sm font-semibold text-[#222222] tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {isPage ? 'Inside Our Clinic' : 'Why Patients Choose Us'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((q, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A35A] mt-0.5 flex-shrink-0" />
                    <span
                      className="text-sm text-[#555555]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/book-appointment"
              className="btn-gold inline-flex px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#F8F8F8] rounded-2xl p-8 text-center border border-[#E8E0D5] hover:border-[#C9A35A]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <div
                className="text-sm text-[#888888] mt-2 font-medium"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {stat.label}
              </div>
              <div className="gold-divider mt-3 group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
