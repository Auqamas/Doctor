'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, Sparkles, Star } from 'lucide-react'
import { withBase } from '@/lib/paths'

const typingWords = ['Natural Beauty', 'Timeless Elegance', 'Youthful Radiance', 'Confident You']

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const word = typingWords[currentWord]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < word.length) {
            setDisplayText(word.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWord((prev) => (prev + 1) % typingWords.length)
          }
        }
      },
      isDeleting ? 60 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord])

  const scrollToExplore = () => {
    const el = document.getElementById('about')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1412]"
    >
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src={withBase('/images/hero-bg.png')}
          alt="Luxury aesthetic clinic background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-[#C9A35A] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full opacity-8 blur-3xl bg-[#C9A35A] pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Gold line decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A35A]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A35A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#C9A35A]/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
              <Sparkles size={14} className="text-[#C9A35A]" />
              <span
                className="text-xs tracking-[0.15em] uppercase text-[#E8D5A3] font-medium"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Premium Aesthetic Medicine
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Where Science
              <br />
              <span className="text-[#C9A35A] italic">Meets</span>
              <br />
              {/* Fixed-height block prevents layout shift during typewriter animation */}
              <span
                className="block"
                style={{ minHeight: '1.15em', lineHeight: '1.15' }}
              >
                {displayText}
                <span className="animate-pulse text-[#C9A35A]">|</span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-white/75 text-lg leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Personalized aesthetic treatments designed to enhance your natural beauty with
              precision, safety, and confidence. Experience world-class care at Aesthetic by Dr.
              Fareena Asghar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToAppointment}
                className="btn-gold px-8 py-4 rounded-full text-sm font-semibold text-white tracking-wide"
              >
                Book Your Consultation
              </button>
              <button
                onClick={scrollToTreatments}
                className="btn-outline-gold border-white/50 text-white hover:border-[#C9A35A] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#C9A35A] hover:border-[#C9A35A]"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)' }}
              >
                Explore Treatments
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#C9A35A" className="text-[#C9A35A]" />
                ))}
                <span
                  className="text-white/60 text-xs ml-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  2.5K+ Happy Patients
                </span>
              </div>
              <div
                className="h-4 w-px bg-white/20"
                aria-hidden="true"
              />
              <span
                className="text-white/60 text-xs"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                10+ Years Experience
              </span>
            </div>
          </div>

          {/* Clinic Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-[#C9A35A]/20 animate-spin-slow" />
              <div
                className="absolute w-[480px] h-[480px] rounded-full border border-[#C9A35A]/10"
                style={{ animation: 'spin 20s linear infinite reverse' }}
              />
            </div>

            {/* Image container */}
            <div className="relative w-80 h-[480px] lg:w-96 lg:h-[550px]">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-[#C9A35A]/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <Image
                  src={withBase('/images/clinic-interior.png')}
                  alt="Aesthetic clinic interior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating card - Experience */}
              <div className="absolute -left-8 bottom-16 glass rounded-2xl p-4 shadow-xl border border-[#C9A35A]/20 animate-fade-in-left">
                <div
                  className="text-2xl font-bold text-[#C9A35A]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  10+
                </div>
                <div
                  className="text-xs text-[#333333] font-medium mt-0.5"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Years Experience
                </div>
              </div>

              {/* Floating card - Patients */}
              <div className="absolute -right-8 top-20 glass rounded-2xl p-4 shadow-xl border border-[#C9A35A]/20 animate-fade-in-right">
                <div
                  className="text-2xl font-bold text-[#C9A35A]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  2.5K+
                </div>
                <div
                  className="text-xs text-[#333333] font-medium mt-0.5"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Happy Patients
                </div>
              </div>

              {/* Floating card - Rating */}
              <div className="absolute -right-4 bottom-8 glass rounded-2xl p-4 shadow-xl border border-[#C9A35A]/20">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} fill="#C9A35A" className="text-[#C9A35A]" />
                  ))}
                </div>
                <div
                  className="text-xs text-[#333333] font-medium"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Google Rating 5.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-[#C9A35A] transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
