'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Clock, Phone, Mail, Calendar } from 'lucide-react'
import { withBase } from '@/lib/paths'
import { clinicPhones } from '@/lib/contact'

const treatments = [
  'Botox', 'Dermal Fillers', 'Lip Enhancement', 'HydraFacial',
  'PRP Therapy', 'Laser Hair Removal', 'Microneedling', 'Chemical Peel',
  'Thread Lift', 'Carbon Laser Facial', 'Acne Treatment', 'Pigmentation Treatment',
  'Skin Tightening', 'Hair Restoration', 'Jawline Contouring', 'Anti-Aging',
]

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
]

type FormData = {
  name: string
  phone: string
  email: string
  treatment: string
  date: string
  time: string
  message: string
}

export default function Appointment() {
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSubmitted(true)
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
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const inputClass =
    'w-full bg-[#F8F8F8] border border-[#E8E0D5] rounded-xl px-4 py-3.5 text-sm text-[#333333] placeholder-[#BBBBBB] focus:outline-none focus:border-[#C9A35A] focus:ring-2 focus:ring-[#C9A35A]/10 transition-all duration-300'

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="section-padding bg-[#F8F8F8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Book Now
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Schedule Your Appointment
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Begin your transformation journey. Book a consultation with Dr. Fareena Asghar today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 reveal-left">
            <div className="relative rounded-3xl overflow-hidden h-72 lg:h-80 mb-6">
              <Image
                src={withBase('/images/treatment-microneedling.png')}
                alt="Aesthetic treatment at our clinic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Aesthetic Clinic
                </p>
                <p
                  className="text-[#E8D5A3] text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Dr. Fareena Asghar
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-3xl p-7 border border-[#E8E0D5] shadow-sm">
              <h3
                className="text-xl font-bold text-[#222222] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] flex items-center justify-center">
                    <Phone size={16} className="text-[#C9A35A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>Phone & WhatsApp</p>
                    {clinicPhones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={phone.tel}
                        className="block text-sm font-medium text-[#333333] hover:text-[#C9A35A] transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] flex items-center justify-center">
                    <Mail size={16} className="text-[#C9A35A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>Email</p>
                    <a href="mailto:info@drfareenaasghar.com" className="text-sm font-medium text-[#333333] hover:text-[#C9A35A] transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                      info@drfareenaasghar.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] flex items-center justify-center">
                    <Clock size={16} className="text-[#C9A35A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>Working Hours</p>
                    <p className="text-sm font-medium text-[#333333]" style={{ fontFamily: 'var(--font-sans)' }}>
                      Mon–Sat: 9AM – 6PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF8EC] flex items-center justify-center">
                    <Calendar size={16} className="text-[#C9A35A]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>Appointments</p>
                    <p className="text-sm font-medium text-[#333333]" style={{ fontFamily: 'var(--font-sans)' }}>
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E8E0D5] shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFF8EC] flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-[#C9A35A]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#222222] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Appointment Requested!
                  </h3>
                  <p
                    className="text-[#888888] max-w-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Thank you for booking with us. Dr. Fareena&apos;s team will contact you shortly to
                    confirm your appointment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-outline-gold px-7 py-3 rounded-full text-sm font-semibold"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-bold text-[#222222] mb-7"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Book an Appointment
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className={inputClass}
                          style={{ fontFamily: 'var(--font-sans)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+971 56 128 0538"
                          className={inputClass}
                          style={{ fontFamily: 'var(--font-sans)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-sans)' }}
                        suppressHydrationWarning
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                        Treatment *
                      </label>
                      <select
                        name="treatment"
                        value={form.treatment}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <option value="">Select a treatment</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          style={{ fontFamily: 'var(--font-sans)' }}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                          Preferred Time *
                        </label>
                        <select
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#555555] mb-2 tracking-wide uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Any concerns or questions for the doctor..."
                        rows={4}
                        className={`${inputClass} resize-none`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                    </div>

                    {/* reCAPTCHA placeholder */}
                    <div className="bg-[#F8F8F8] border border-[#E8E0D5] rounded-xl px-4 py-3 flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-[#E8E0D5] rounded" />
                      <span className="text-xs text-[#888888]" style={{ fontFamily: 'var(--font-sans)' }}>
                        I am not a robot (reCAPTCHA)
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-gold w-full py-4 rounded-xl text-sm font-semibold text-white tracking-wide disabled:opacity-70 transition-all"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        'Book Appointment'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
