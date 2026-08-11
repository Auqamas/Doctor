'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { clinicAddress, clinicPhones } from '@/lib/contact'
import { withBase } from '@/lib/paths'

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const quickLinks = ['Home', 'About', 'Treatments', 'Gallery', 'Testimonials', 'Blog', 'Contact']
const treatments = [
  'Botox', 'Dermal Fillers', 'HydraFacial', 'PRP Therapy',
  'Laser Hair Removal', 'Thread Lift', 'Chemical Peel', 'Microneedling',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1412 0%, #231a14 50%, #1a1412 100%)' }}
    >
      {/* Top gold line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A35A]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
                <div className="relative w-24 h-24">
                  <Image
                    src={withBase('/images/logo.png')}
                    alt="Aesthetic by Dr. Fareena Asghar"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Where science meets timeless beauty. Premium aesthetic treatments personalized to
              reveal your most confident self.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fareenaasghar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#C9A35A] hover:text-[#C9A35A] transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-[#C9A35A] hover:text-[#C9A35A] transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-[#C9A35A] transition-colors duration-300 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Treatments
            </h4>
            <ul className="space-y-2.5">
              {treatments.map((t) => (
                <li key={t}>
                  <button
                    onClick={() => scrollTo('treatments')}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-[#C9A35A] transition-colors duration-300 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={14} className="text-[#C9A35A] mt-0.5 flex-shrink-0" />
                <span style={{ fontFamily: 'var(--font-sans)' }}>
                  {clinicAddress.full}
                </span>
              </div>
              {clinicPhones.map((phone) => (
                <div key={phone.tel} className="flex items-center gap-2.5 text-sm">
                  <Phone size={14} className="text-[#C9A35A] flex-shrink-0" />
                  <a
                    href={phone.tel}
                    className="text-white/50 hover:text-[#C9A35A] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {phone.display}
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-[#C9A35A] flex-shrink-0" />
                <a
                  href="mailto:info@drfareenaasghar.com"
                  className="text-white/50 hover:text-[#C9A35A] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  info@drfareenaasghar.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Newsletter
            </h4>
            {subscribed ? (
              <p
                className="text-sm text-[#C9A35A]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-white/8 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C9A35A]/50 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="btn-gold px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-white/40 text-center sm:text-left"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            &copy; {new Date().getFullYear()} Aesthetic by Dr. Fareena Asghar. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button
              className="text-xs text-white/40 hover:text-[#C9A35A] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Privacy Policy
            </button>
            <button
              className="text-xs text-white/40 hover:text-[#C9A35A] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Terms &amp; Conditions
            </button>
            <button
              className="text-xs text-white/40 hover:text-[#C9A35A] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#C9A35A]/3 blur-3xl pointer-events-none" />
    </footer>
  )
}
