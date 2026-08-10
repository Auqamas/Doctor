'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Play, X } from 'lucide-react'

const InstagramEmbed = dynamic(() => import('./InstagramEmbed'), { ssr: false })

const INSTAGRAM_PROFILE = 'https://www.instagram.com/fareenaasghar/'

function InstagramIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface WorkItem {
  id: string
  type: 'image' | 'video'
  url: string
  title: string
  category: string
}

// Real posts from @fareenaasghar
const workItems: WorkItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://www.instagram.com/p/DZPogbUIF3Q/',
    title: 'Clinic Highlights',
    category: 'Clinic',
  },
  {
    id: '2',
    type: 'video',
    url: 'https://www.instagram.com/reel/DZPcAhyoGgI/',
    title: 'Treatment Results',
    category: 'Results',
  },
  {
    id: '3',
    type: 'image',
    url: 'https://www.instagram.com/p/DVoOzjmkZs_/',
    title: 'Aesthetic Care',
    category: 'Treatments',
  },
  {
    id: '4',
    type: 'video',
    url: 'https://www.instagram.com/reel/DVL2ndvEybN/',
    title: 'Patient Transformation',
    category: 'Results',
  },
  {
    id: '5',
    type: 'video',
    url: 'https://www.instagram.com/reel/DU2N2NtiPZG/',
    title: 'Skin Rejuvenation',
    category: 'Skin',
  },
  {
    id: '6',
    type: 'video',
    url: 'https://www.instagram.com/reel/DUThoX1CHxf/',
    title: 'Before & After',
    category: 'Results',
  },
]

const categories = ['All', 'Clinic', 'Results', 'Treatments', 'Skin']

export default function WorkResults() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredItems, setFilteredItems] = useState(workItems)
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(workItems)
    } else {
      setFilteredItems(workItems.filter((item) => item.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section className="py-20 md:py-28 bg-white" id="work-results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-[#C9A35A] text-sm font-medium tracking-widest uppercase mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Portfolio & Results
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#222222] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Work &<span className="text-[#C9A35A]"> Results</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-[#555555] text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Real transformations from our patients. Follow along on Instagram for the latest
            treatments, results, and clinic updates.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#C9A35A] text-white'
                  : 'bg-[#F8F8F8] text-[#333333] hover:bg-[#E8E8E8]'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-gradient-to-br from-[#F8F8F8] to-[#E8E8E8] aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 border-2 border-[#C9A35A] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center gap-3">
                  {item.type === 'video' ? (
                    <>
                      <Play className="w-16 h-16 text-[#C9A35A]" fill="currentColor" />
                      <span
                        className="text-sm font-medium text-[#C9A35A] bg-white px-3 py-1 rounded-full"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        REEL
                      </span>
                    </>
                  ) : (
                    <div className="w-16 h-16 bg-[#C9A35A] rounded-full flex items-center justify-center text-white">
                      <InstagramIcon size={28} />
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 rounded-2xl">
                <h3
                  className="text-white font-bold text-center px-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>
                <span
                  className="text-[#C9A35A] text-sm font-medium"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  View on Instagram
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#C9A35A] text-white font-semibold rounded-full hover:bg-[#B8932A] transition-colors"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Follow @fareenaasghar on Instagram
          </a>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#F8F8F8]"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="p-6 pt-14">
              <InstagramEmbed url={selectedItem.url} caption={selectedItem.title} />
              <div className="mt-4 text-center">
                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#C9A35A] hover:underline"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Open post on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
