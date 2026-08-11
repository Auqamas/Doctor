'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { clinicAddress, clinicPhones, primaryPhone, mapsEmbedUrl } from '@/lib/contact'

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

const contactInfo = [
  {
    icon: MapPin,
    title: 'Clinic Address',
    lines: [clinicAddress.line1, clinicAddress.line2],
  },
  {
    icon: Phone,
    title: 'Phone & WhatsApp',
    lines: clinicPhones.map((p) => p.display),
    links: clinicPhones.map((p) => p.tel),
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@drfareenaasghar.com', 'appointments@drfareenaasghar.com'],
    links: ['mailto:info@drfareenaasghar.com', 'mailto:appointments@drfareenaasghar.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
  },
]

export default function Contact() {
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
    <section id="contact" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Get in Touch
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Visit Us Today
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We are here for you. Reach out to schedule a consultation or simply ask a question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact info */}
          <div className="reveal-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <div
                    key={i}
                    className="bg-[#F8F8F8] rounded-2xl p-6 border border-[#E8E0D5] hover:border-[#C9A35A]/40 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#C9A35A]" />
                    </div>
                    <h4
                      className="text-sm font-semibold text-[#222222] mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {info.title}
                    </h4>
                    {info.lines.map((line, j) => (
                      info.links ? (
                        <a
                          key={j}
                          href={info.links[j]}
                          className="block text-sm text-[#888888] hover:text-[#C9A35A] transition-colors"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={j}
                          className="text-sm text-[#888888]"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          {line}
                        </p>
                      )
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Emergency contact */}
            <div
              className="rounded-2xl p-6 border border-[#C9A35A]/30"
              style={{ background: 'linear-gradient(135deg, #FFF8EC 0%, #FFF3DC 100%)' }}
            >
              <h4
                className="text-sm font-bold text-[#222222] mb-2 flex items-center gap-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <MessageCircle size={16} className="text-[#C9A35A]" />
                Emergency Contact
              </h4>
              <p className="text-sm text-[#555555] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                For urgent aesthetic concerns or post-treatment queries:
              </p>
              <a
                href={primaryPhone.wa}
                className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              >
                <MessageCircle size={14} />
                WhatsApp Now
              </a>
            </div>

            {/* Social media */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                Follow Us:
              </span>
              <a
                href="https://www.instagram.com/fareenaasghar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8F8F8] border border-[#E8E0D5] flex items-center justify-center hover:bg-[#C9A35A] hover:border-[#C9A35A] hover:text-white text-[#555555] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F8F8F8] border border-[#E8E0D5] flex items-center justify-center hover:bg-[#C9A35A] hover:border-[#C9A35A] hover:text-white text-[#555555] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D5] h-full min-h-[400px]">
              <iframe
                title="Aesthetic Clinic Location"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
