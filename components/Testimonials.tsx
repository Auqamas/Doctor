'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    treatment: 'Botox & Fillers',
    image: '/images/patient-1.png',
    rating: 5,
    review:
      'Dr. Fareena is absolutely exceptional. I was nervous about getting fillers for the first time, but she made me feel completely at ease. The results are so natural — exactly what I wanted. My friends keep telling me I look refreshed and glowing!',
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Sana Malik',
    treatment: 'HydraFacial',
    image: '/images/patient-2.png',
    rating: 5,
    review:
      'I have been coming to Aesthetic clinic for 6 months now and the transformation in my skin is incredible. Dr. Fareena tailored a complete skin care plan for me. The HydraFacial treatments have completely cleared my skin and I get compliments every single day.',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Fatima Zahra',
    treatment: 'Thread Lift',
    image: '/images/patient-3.png',
    rating: 5,
    review:
      'I had a Thread Lift procedure done by Dr. Fareena and the results exceeded my expectations. She is incredibly skilled and her attention to detail is unmatched. The clinic is luxurious, hygienic, and the staff is warm and professional. Highly recommend!',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Nadia Hassan',
    treatment: 'PRP Therapy',
    image: '/images/patient-1.png',
    rating: 5,
    review:
      'Dr. Fareena is not just a doctor, she is an artist. My PRP hair treatment has shown amazing results. I could see the difference after just 3 sessions. She truly cares about her patients and goes above and beyond to ensure the best outcome.',
    date: '2 months ago',
  },
  {
    id: 5,
    name: 'Zara Ahmed',
    treatment: 'Laser Hair Removal',
    image: '/images/patient-2.png',
    rating: 5,
    review:
      'Wonderful experience from start to finish. The clinic is spotlessly clean and feels like a 5-star spa. Dr. Fareena explained every step of my laser treatment and the results are permanent and perfect. Worth every penny!',
    date: '1 month ago',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

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

  const t = testimonials[current]

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Patient Stories
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Real Results, Real People
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Hear from our patients about their transformative experiences at Aesthetic by Dr.
            Fareena Asghar.
          </p>
        </div>

        {/* Google Rating Banner */}
        <div className="flex items-center justify-center gap-6 mb-12 reveal">
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-[#E8E0D5]">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill="#C9A35A" className="text-[#C9A35A]" />
              ))}
            </div>
            <span
              className="font-bold text-[#222222] text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              5.0
            </span>
            <span
              className="text-sm text-[#888888]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Google Rating
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-[#E8E0D5]">
            <span
              className="font-bold text-[#222222] text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              2.5K+
            </span>
            <span
              className="text-sm text-[#888888]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Happy Patients
            </span>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="reveal">
          <div className="bg-white rounded-3xl shadow-xl border border-[#E8E0D5] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Patient photo */}
              <div className="relative h-72 lg:h-full min-h-[350px]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-t lg:from-black/50 lg:via-transparent" />
              </div>

              {/* Right - Testimonial */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                {/* Quote icon */}
                <Quote size={40} className="text-[#C9A35A]/20 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="#C9A35A" className="text-[#C9A35A]" />
                  ))}
                </div>

                {/* Review text */}
                <p
                  className="text-[#444444] text-lg leading-relaxed mb-8 italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Patient info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A35A]/30">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div
                      className="font-bold text-[#222222]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-sm text-[#C9A35A]"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {t.treatment} · {t.date}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#C9A35A] hover:bg-[#C9A35A] hover:text-white text-[#333333] transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
                        className={`rounded-full transition-all duration-300 ${
                          i === current
                            ? 'w-6 h-2 bg-[#C9A35A]'
                            : 'w-2 h-2 bg-[#E8E0D5] hover:bg-[#C9A35A]/50'
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-[#E8E0D5] flex items-center justify-center hover:border-[#C9A35A] hover:bg-[#C9A35A] hover:text-white text-[#333333] transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {testimonials.slice(0, 3).map((test, i) => (
            <div
              key={test.id}
              className={`bg-white rounded-2xl p-6 border shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md reveal ${
                current === i ? 'border-[#C9A35A]/40' : 'border-[#E8E0D5]'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => { setCurrent(i); setIsAutoPlaying(false) }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: test.rating }).map((_, j) => (
                  <Star key={j} size={12} fill="#C9A35A" className="text-[#C9A35A]" />
                ))}
              </div>
              <p
                className="text-sm text-[#555555] leading-relaxed mb-4 line-clamp-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                &ldquo;{test.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E8E0D5]">
                  <Image src={test.image} alt={test.name} width={36} height={36} className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#222222]" style={{ fontFamily: 'var(--font-sans)' }}>
                    {test.name}
                  </div>
                  <div className="text-xs text-[#C9A35A]" style={{ fontFamily: 'var(--font-sans)' }}>
                    {test.treatment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
