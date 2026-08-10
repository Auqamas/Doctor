'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Clock, Tag, Calendar } from 'lucide-react'
import { withBase } from '@/lib/paths'

const posts = [
  {
    id: 1,
    title: 'The Science Behind Natural-Looking Botox: What You Need to Know',
    excerpt: 'Discover how precision placement and expert dosing create results that look refreshed and natural — never frozen or overdone.',
    image: '/images/blog-1.png',
    category: 'Anti-Aging',
    readTime: '5 min read',
    date: 'July 15, 2026',
    author: 'Dr. Fareena Asghar',
  },
  {
    id: 2,
    title: 'HydraFacial vs Traditional Facials: Which is Right for Your Skin?',
    excerpt: 'A comprehensive guide comparing HydraFacial with traditional facials — from ingredients and technology to results and downtime.',
    image: '/images/blog-2.png',
    category: 'Skin Care',
    readTime: '7 min read',
    date: 'July 8, 2026',
    author: 'Dr. Fareena Asghar',
  },
  {
    id: 3,
    title: 'PRP Hair Restoration: A Complete Guide to the Procedure and Results',
    excerpt: 'Everything you need to know about PRP hair therapy — how it works, what to expect, and when you\'ll see results.',
    image: '/images/blog-3.png',
    category: 'Hair Care',
    readTime: '6 min read',
    date: 'June 28, 2026',
    author: 'Dr. Fareena Asghar',
  },
]

const categoryColors: Record<string, string> = {
  'Anti-Aging': 'bg-[#FFF8EC] text-[#C9A35A]',
  'Skin Care': 'bg-[#ECF8FF] text-[#5A9AC9]',
  'Hair Care': 'bg-[#ECF8EC] text-[#5AC96A]',
}

export default function Blog() {
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
    <section id="blog" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 reveal">
          <div>
            <span
              className="text-sm tracking-[0.25em] uppercase text-[#C9A35A] font-medium"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Latest Articles
            </span>
            <div className="gold-divider" style={{ margin: '12px 0' }} />
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#222222]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Skin Care & Beauty Tips
            </h2>
          </div>
          <p
            className="text-[#888888] mt-4 lg:mt-0 max-w-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Expert insights, treatment guides, and beauty tips from Dr. Fareena Asghar.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`bg-[#F8F8F8] rounded-3xl overflow-hidden border border-[#E8E0D5] hover:border-[#C9A35A]/30 hover:shadow-xl transition-all duration-500 group reveal ${
                i === 0 ? '' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={withBase(post.image)}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category badge */}
                <div className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-[#FFF8EC] text-[#C9A35A]'}`}
                  style={{ fontFamily: 'var(--font-sans)' }}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[#888888] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#C9A35A] transition-colors duration-300 line-clamp-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm text-[#888888] leading-relaxed mb-6 line-clamp-3"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {post.excerpt}
                </p>

                {/* Author + Read more */}
                <div className="flex items-center justify-between pt-5 border-t border-[#E8E0D5]">
                  <span
                    className="text-xs font-medium text-[#555555]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    By {post.author}
                  </span>
                  <button
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#C9A35A] hover:gap-3 transition-all duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10 reveal">
          <button className="btn-outline-gold px-8 py-3.5 rounded-full text-sm font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
