import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs: Breadcrumb[]
  badge?: string
}

export default function PageHero({ title, subtitle, description, breadcrumbs, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 bg-[#1a1412] overflow-hidden">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1412] via-[#221a10] to-[#1a1412]" />

      {/* Decorative gold orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#C9A35A] opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full bg-[#C9A35A] opacity-[0.04] blur-3xl pointer-events-none" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A35A]/30 to-transparent" />
      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A35A]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#C9A35A]/30 rounded-full px-4 py-1.5 mb-6">
            <span
              className="text-xs tracking-[0.18em] uppercase text-[#E8D5A3] font-medium"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        {subtitle ? (
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {title}{' '}
            <span className="text-[#C9A35A] italic">{subtitle}</span>
          </h1>
        ) : (
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {title}
          </h1>
        )}

        {/* Gold divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A35A] to-transparent mx-auto my-5" />

        {/* Description */}
        {description && (
          <p
            className="text-white/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {description}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav
          className="flex items-center justify-center gap-1.5 mt-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-[#C9A35A]/60" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-xs text-white/50 hover:text-[#C9A35A] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className="text-xs text-[#C9A35A]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
