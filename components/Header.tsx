'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { withBase } from '@/lib/paths'

type NavItem = {
  label: string
  href?: string
  dropdown?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Treatments',
    href: '/treatments',
    dropdown: [
      { label: 'All Treatments', href: '/treatments', description: 'Browse our full menu' },
      { label: 'Botox & Anti-Aging', href: '/treatments#botox', description: 'Smooth lines naturally' },
      { label: 'Dermal Fillers', href: '/treatments#fillers', description: 'Restore lost volume' },
      { label: 'HydraFacial', href: '/treatments#hydrafacial', description: 'Deep skin hydration' },
      { label: 'PRP Therapy', href: '/treatments#prp', description: 'Natural regeneration' },
      { label: 'Laser Hair Removal', href: '/treatments#laser', description: 'Permanent reduction' },
      { label: 'Microneedling', href: '/treatments#microneedling', description: 'Collagen induction' },
    ],
  },
  {
    label: 'More',
    dropdown: [
      { label: 'Gallery', href: '/gallery', description: 'Before & after results' },
      { label: 'Testimonials', href: '/#testimonials', description: 'Patient reviews' },
      { label: 'Blog', href: '/blog', description: 'Skin & beauty articles' },
      { label: 'FAQs', href: '/faq', description: 'Common questions answered' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // On the home page, transparent until scrolled; on other pages always solid
  const isSolid = !isHomePage || isScrolled

  const navTextClass = isSolid ? 'text-white/95' : 'text-white/90'
  const navHoverClass = isSolid ? 'hover:text-[#FFF8EC]' : 'hover:text-[#C9A35A]'
  const navActiveClass = isSolid ? 'text-white font-semibold underline underline-offset-4' : 'text-[#C9A35A]'
  const logoMainClass = isSolid ? 'text-white' : 'text-[#C9A35A]'
  const logoSubClass = isSolid ? 'text-[#FFF8EC]' : 'text-[#E8D5A3]'

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-[#C9A35A]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(201,163,90,0.35)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0 max-w-[340px] xl:max-w-[400px] hover:opacity-80 transition-opacity">
              <div className={`relative shrink-0 ${isSolid ? 'w-20 h-20' : 'w-28 h-28'} transition-all duration-500`}>
                <Image
                  src={withBase('/images/logo.png')}
                  alt="Aesthetic by Dr. Fareena Asghar"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span
                  className={`text-base sm:text-lg xl:text-xl font-semibold tracking-wide transition-colors duration-500 whitespace-nowrap ${logoMainClass}`}
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Dr. Fareena Asghar
                </span>
                <span
                  className={`text-[10px] sm:text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-500 whitespace-nowrap ${logoSubClass}`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Aesthetic &amp; Dermatologist Physician
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href && !item.dropdown ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${navHoverClass} ${
                        pathname === item.href ? navActiveClass : navTextClass
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${navHoverClass} ${
                        openDropdown === item.label ? navActiveClass : navTextClass
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.href ? (
                        <Link href={item.href} className={navHoverClass} onClick={(e) => e.stopPropagation()}>
                          {item.label}
                        </Link>
                      ) : item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}

                  {/* Dropdown panel */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-200 ${
                        openDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                      style={{ minWidth: item.label === 'Treatments' ? '280px' : '220px' }}
                    >
                      {/* Arrow pointer */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-[#E8E0D5] rotate-45 shadow-sm" />
                      <div className="relative bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#E8E0D5] overflow-hidden pt-2">
                        {item.dropdown.map((sub, i) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`flex flex-col px-5 py-3 hover:bg-[#FBF7F0] transition-colors duration-150 group ${
                              i !== item.dropdown!.length - 1 ? 'border-b border-[#F0EAE0]' : ''
                            }`}
                          >
                            <span
                              className="text-sm font-semibold text-[#222222] group-hover:text-[#C9A35A] transition-colors"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {sub.label}
                            </span>
                            {sub.description && (
                              <span
                                className="text-xs text-[#999999] mt-0.5"
                                style={{ fontFamily: 'var(--font-sans)' }}
                              >
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Phone */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href="tel:+923001234567"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                  isSolid ? 'hover:text-[#FFF8EC]' : 'hover:text-[#C9A35A]'
                } ${navTextClass}`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Phone size={14} />
                <span>+92 300 123 4567</span>
              </a>
              <Link
                href="/book-appointment"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isSolid
                    ? 'bg-white text-[#C9A35A] hover:bg-[#FFF8EC]'
                    : 'btn-gold text-white'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-white"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white shadow-xl border-t border-[#E8E0D5] mt-2 overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col p-4 gap-0.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#333333] hover:text-[#C9A35A] hover:bg-[#F8F3E8] rounded-xl transition-all"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180 text-[#C9A35A]' : ''}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileExpanded === item.label ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-0.5">
                          {item.href && (
                            <Link
                              href={item.href}
                              className="px-4 py-2.5 text-sm font-semibold text-[#C9A35A] hover:bg-[#F8F3E8] rounded-xl transition-all"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              View All {item.label}
                            </Link>
                          )}
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="px-4 py-2.5 text-sm text-[#555555] hover:text-[#C9A35A] hover:bg-[#F8F3E8] rounded-xl transition-all"
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`block px-4 py-3 text-sm font-semibold hover:text-[#C9A35A] hover:bg-[#F8F3E8] rounded-xl transition-all ${
                        pathname === item.href ? 'text-[#C9A35A] bg-[#F8F3E8]' : 'text-[#333333]'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/book-appointment"
                className="btn-gold mt-3 px-5 py-3 rounded-full text-sm font-semibold text-white text-center block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
