'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is aesthetic medicine?',
        a: 'Aesthetic medicine encompasses a range of non-surgical medical procedures designed to improve the appearance of the skin and body. This includes treatments like Botox, dermal fillers, laser therapy, chemical peels, and more — all aimed at enhancing natural beauty with minimal downtime.',
      },
      {
        q: 'Is Dr. Fareena Asghar fully qualified?',
        a: 'Yes. Dr. Fareena holds an MBBS degree and a Diploma in Aesthetic Medicine, along with multiple international certifications in Botox, dermal fillers, laser therapy, PRP, and more. She is a member of leading aesthetic medicine societies and has trained in Pakistan, Dubai, and the UK.',
      },
      {
        q: 'Is the clinic safe and hygienic?',
        a: 'Absolutely. Our clinic follows international medical hygiene and safety standards. All equipment is sterilized and single-use products are used where applicable. We use only premium, FDA-approved products and techniques to ensure the highest level of patient safety.',
      },
    ],
  },
  {
    category: 'Treatments',
    questions: [
      {
        q: 'How long do Botox results last?',
        a: 'Botox results typically last between 3 to 6 months, depending on the area treated, the dosage used, and individual patient factors such as metabolism and muscle activity. Regular treatments can help maintain results longer over time.',
      },
      {
        q: 'Are dermal fillers painful?',
        a: 'Most patients experience minimal discomfort during filler treatments. We apply a topical numbing cream before the procedure, and many fillers contain lidocaine (a local anesthetic) to ensure maximum comfort. The procedure is generally very well-tolerated.',
      },
      {
        q: 'How many PRP sessions do I need for hair restoration?',
        a: 'For optimal hair restoration results, we typically recommend a course of 3 to 4 PRP sessions spaced 4 to 6 weeks apart, followed by maintenance treatments every 4 to 6 months. Individual results vary based on the degree of hair loss and overall health.',
      },
      {
        q: 'What is the downtime for HydraFacial?',
        a: 'HydraFacial has zero downtime — it is often called the "lunchtime facial." You can return to your daily activities immediately after the treatment. Some patients may notice a subtle glow and slight redness that typically resolves within a few hours.',
      },
    ],
  },
  {
    category: 'Booking',
    questions: [
      {
        q: 'How do I book a consultation?',
        a: 'You can book a consultation directly through our website using the appointment form, by calling us at +92 300 123 4567, or by messaging us on WhatsApp. We offer in-person consultations and can arrange online consultations for out-of-city patients.',
      },
      {
        q: 'What should I expect during my first consultation?',
        a: 'Your first consultation with Dr. Fareena is a detailed, personalized discussion about your aesthetic goals, medical history, and skin concerns. Dr. Fareena will perform a thorough facial and skin analysis and create a customized treatment plan tailored specifically to you. There is no obligation to proceed.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes, we offer flexible payment options for many of our treatment packages. Please discuss your requirements during your consultation and our team will work out a plan that suits your budget. We believe premium aesthetic care should be accessible.',
      },
    ],
  },
]

type FAQ = {
  q: string
  a: string
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-[#C9A35A]/40 shadow-sm' : 'border-[#E8E0D5]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#FAFAFA] transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-base transition-colors ${
            isOpen ? 'text-[#C9A35A]' : 'text-[#222222]'
          }`}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
            isOpen ? 'bg-[#C9A35A] text-white' : 'bg-[#F8F8F8] text-[#888888]'
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="h-px bg-[#F0ECE4] mb-4" />
          <p
            className="text-[#555555] leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>('0-0')
  const [activeTab, setActiveTab] = useState(0)
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
    <section id="faq" ref={sectionRef} className="section-padding bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            FAQ
          </span>
          <div className="gold-divider" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#222222] mt-2"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-[#888888] mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Everything you need to know about our treatments, procedures, and booking process.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-8 reveal">
          {faqs.map((section, i) => (
            <button
              key={i}
              onClick={() => { setActiveTab(i); setOpenKey(null) }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-[#C9A35A] text-white shadow-[0_4px_15px_rgba(201,163,90,0.3)]'
                  : 'bg-white text-[#555555] border border-[#E8E0D5] hover:border-[#C9A35A] hover:text-[#C9A35A]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {section.category}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-3 reveal">
          {faqs[activeTab].questions.map((faq, j) => {
            const key = `${activeTab}-${j}`
            return (
              <FAQItem
                key={key}
                faq={faq}
                isOpen={openKey === key}
                onToggle={() => setOpenKey(openKey === key ? null : key)}
              />
            )
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-white rounded-3xl p-10 border border-[#E8E0D5] shadow-sm reveal">
          <h3
            className="text-2xl font-bold text-[#222222] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Still Have Questions?
          </h3>
          <p
            className="text-[#888888] mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our team is ready to answer any questions you may have. Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923001234567"
              className="btn-gold px-7 py-3 rounded-full text-sm font-semibold text-white text-center"
            >
              WhatsApp Us
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-gold px-7 py-3 rounded-full text-sm font-semibold text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
