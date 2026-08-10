'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Award, BookOpen, Heart, Globe, CheckCircle2 } from 'lucide-react'
import { withBase } from '@/lib/paths'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const achievements = [
  { icon: Award, label: 'MBBS Degree', value: 'Board Certified' },
  { icon: BookOpen, label: 'MSc Dermatology', value: 'Cardiff University' },
  { icon: Heart, label: 'A4M Member', value: 'Anti-Aging Medicine' },
  { icon: Globe, label: 'International Training', value: 'Cardiff, Dubai & UAE' },
]

const specializations = [
  'Botox & Anti-Aging Treatments',
  'Dermal & Lip Fillers',
  'PRP Therapy (Face & Body)',
  'Thread Lifts (Face, Nose & Body)',
  'Hair Loss Treatments',
  'Pigmentation & Melasma',
  'Dark Circles & Eye Rejuvenation',
  'Q-Switch & Fotona Lasers',
  'Acne Scar Treatment',
  'Chest & Neck Tightening',
  'IV Therapy',
  'Stretch Mark Removal',
  'Mesotherapy',
  'Skin Boosters',
  'Weight Loss & Management',
  'Comprehensive Skin Rejuvenation',
]

export default function Doctor() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="doctor" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Meet The Expert
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dr. Fareena Asghar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2 flex justify-center reveal-left">
            <div className="relative w-full max-w-sm">
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-[44px] bg-gradient-to-br from-[#C9A35A]/20 to-[#E8D5A3]/10" />
              <div className="relative rounded-[38px] overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src={withBase('/images/doctor-hero.png')}
                  alt="Dr. Fareena Asghar"
                  fill
                  className="object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412]/60 via-transparent to-transparent" />

                {/* Name card at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Dr. Fareena Asghar
                  </h3>
                  <p
                    className="text-[#E8D5A3] text-sm mt-1"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    MBBS · Aesthetic & Dermatologist Physician
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://www.instagram.com/fareenaasghar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A35A] transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A35A] transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={16} />
                    </a>
                    <a
                      href="https://www.drfareenaasghar.com"
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#C9A35A] transition-colors duration-300"
                      aria-label="Website"
                    >
                      <Globe size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 reveal-right">
            <h3
              className="text-3xl font-bold text-[#222222] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              MBBS, PgDip, MSc Dermatology
            </h3>
            <p
              className="text-[#C9A35A] text-sm font-medium tracking-widest uppercase mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Board-Certified Aesthetic & Dermatologist Physician
            </p>

            <p
              className="text-[#555555] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Dr. Fareena Asghar is an internationally trained, board-certified Aesthetic & Dermatologist Physician specializing in nonsurgical and minimally invasive aesthetic procedures. She earned her medical degree (MBBS) and completed a Postgraduate Diploma (PgDip) and MSc in Practical Dermatology from Cardiff University, United Kingdom. An active member of the American Academy of Anti-Aging Medicine (A4M), Dr. Fareena holds multiple advanced certifications in aesthetic medicine.
            </p>

            <p
              className="text-[#555555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Known for subtle, elegant enhancements, she carefully assesses facial structure and individual goals to create personalized treatment plans that prioritize safety, comfort, and natural-looking, long-lasting results. Her dedication to continuous learning, innovation, and excellence ensures the highest standards in anti-aging care, natural rejuvenation, and aesthetic enhancement. Dr. Fareena is committed to creating individualized treatment plans for both male and female patients.
            </p>

            {/* Specializations */}
            <div className="mb-8">
              <h4
                className="text-sm font-semibold text-[#222222] tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Areas of Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specializations.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#C9A35A] flex-shrink-0" />
                    <span
                      className="text-sm text-[#555555]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((a, i) => {
                const Icon = a.icon
                return (
                  <div
                    key={i}
                    className="bg-[#F8F8F8] rounded-2xl p-4 border border-[#E8E0D5] hover:border-[#C9A35A]/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={15} className="text-[#C9A35A]" />
                      <span
                        className="text-xs font-semibold text-[#C9A35A]"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {a.value}
                      </span>
                    </div>
                    <p
                      className="text-xs text-[#555555]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {a.label}
                    </p>
                  </div>
                )
              })}
            </div>

            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
