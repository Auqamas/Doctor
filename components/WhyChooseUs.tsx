'use client'

import { useEffect, useRef } from 'react'
import {
  ShieldCheck,
  Microscope,
  UserCheck,
  Globe,
  Smile,
  Lock,
  Banknote,
  Users,
  Cpu,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Certified Specialist',
    description: 'Dr. Fareena holds international certifications in aesthetic medicine and is recognized by leading medical boards.',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'We invest in the latest FDA-approved equipment and premium medical-grade products for superior outcomes.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Plans',
    description: 'Every treatment is custom-designed to your unique facial anatomy, skin type, and aesthetic goals.',
  },
  {
    icon: Globe,
    title: 'International Standards',
    description: 'Our clinic follows international protocols and hygiene standards comparable to Dubai and European clinics.',
  },
  {
    icon: Smile,
    title: 'Comfortable Environment',
    description: 'A warm, luxurious clinic atmosphere designed to make you feel at ease from the moment you arrive.',
  },
  {
    icon: Lock,
    title: 'Safe Procedures',
    description: 'Patient safety is our highest priority. All procedures are performed with the utmost medical care and precision.',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description: 'No hidden fees. We offer clear, affordable pricing with flexible packages tailored to your needs.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our support team is trained to the highest standards ensuring seamless, professional care at every touchpoint.',
  },
  {
    icon: Cpu,
    title: 'Modern Techniques',
    description: 'We continuously update our methods with the latest evidence-based techniques in global aesthetic medicine.',
  },
]

export default function WhyChooseUs() {
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
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1412 0%, #2a1f18 50%, #1a1412 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#C9A35A]/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#C9A35A]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A35A]/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Why Choose Us
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            The Aesthetic Difference
          </h2>
          <p
            className="text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We don&apos;t just treat — we transform. Here is what sets Aesthetic by Dr. Fareena
            Asghar apart from the rest.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C9A35A]/40 rounded-2xl p-7 transition-all duration-500 hover:bg-white/8 reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A35A]/0 to-[#C9A35A]/0 group-hover:from-[#C9A35A]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#C9A35A]/10 border border-[#C9A35A]/20 flex items-center justify-center mb-5 group-hover:bg-[#C9A35A]/20 transition-colors duration-300">
                    <Icon size={22} className="text-[#C9A35A]" />
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-sm text-white/55 leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Number decoration */}
                <div
                  className="absolute top-4 right-5 text-5xl font-bold text-white/5 select-none pointer-events-none"
                  style={{ fontFamily: 'var(--font-serif)' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 reveal">
          <div className="glass rounded-3xl p-10 text-center border border-[#C9A35A]/20">
            <h3
              className="text-3xl font-bold text-[#222222] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Begin Your Transformation?
            </h3>
            <p
              className="text-[#555555] mb-8 max-w-xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Schedule a complimentary consultation with Dr. Fareena Asghar and discover your
              personalized treatment plan.
            </p>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold px-10 py-4 rounded-full text-sm font-semibold text-white"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
