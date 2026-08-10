import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Blog from '@/components/Blog'
import Appointment from '@/components/Appointment'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Blog & Articles | Aesthetic by Dr. Fareena Asghar',
  description:
    'Expert skin care advice, aesthetic medicine insights, and beauty tips from Dr. Fareena Asghar.',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Skin Care"
          subtitle="& Beauty Blog"
          description="Expert insights, treatment guides, and skin health tips from Dr. Fareena Asghar and our clinical team."
          badge="Knowledge Hub"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />
        <Blog />
        <Appointment />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
