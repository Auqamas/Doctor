'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Award, CheckCircle2, Star } from 'lucide-react'

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

const qualifications = [
  'MBBS, Internationally Trained',
  'PgDip & MSc Practical Dermatology, Cardiff University, UK',
  'Advanced Certifications in Injectables & Energy-Based Devices',
  'Active Member, American Academy of Anti-Aging Medicine (A4M)',
  'Board-Certified Aesthetic & Dermatologist Physician',
  'Specialized in Nonsurgical & Minimally Invasive Procedures',
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Meet Dr. Fareena Asghar
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A pioneer in aesthetic medicine, combining advanced science with an artistic eye to
            deliver naturally beautiful results.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="reveal-left relative">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-[#F8F3E8] rounded-[40px] -z-10" />
              <div className="absolute top-4 left-4 right-4 bottom-4 rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctor-about.png"
                  alt="Dr. Fareena Asghar in consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Award badge */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-xl border border-[#C9A35A]/20">
                <Award size={28} className="text-[#C9A35A] mb-1" />
                <div className="text-xs font-semibold text-[#222222]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Certified
                </div>
                <div className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Aesthetic Specialist
                </div>
              </div>

              {/* Stars badge */}
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

          {/* Content */}
          <div className="reveal-right">
            <h3
              className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Internationally Trained
              <span className="text-[#C9A35A]"> Aesthetic & Dermatologist Physician</span>
            </h3>
            <p
              className="text-[#555555] leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Dr. Fareena Asghar is an internationally trained, board-certified Aesthetic & Dermatologist Physician with advanced training from Cardiff University, UK, and extensive clinical experience. Her dedication to continuous learning, innovation, and excellence ensures the highest standards in anti-aging care, natural rejuvenation, and aesthetic enhancement.
            </p>
            <p
              className="text-[#555555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Known for subtle, elegant enhancements, Dr. Fareena carefully assesses facial structure and individual goals to create personalized treatment plans. Her refined aesthetic sense and patient-first approach focus on enhancing individual beauty while preserving facial harmony, ensuring results that are natural, balanced, and confidence-enhancing.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h4
                className="text-sm font-semibold text-[#222222] tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Qualifications & Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((q, i) => (
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

            {/* CTA */}
            <button
              onClick={() => {
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold text-white"
            >
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Stats */}
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
