import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Gallery from '@/components/Gallery'
import Appointment from '@/components/Appointment'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Gallery & Results | Aesthetic by Dr. Fareena Asghar',
  description:
    'Browse real before & after results and treatment photos from our clinic. See the transformations our patients have experienced.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Before &"
          subtitle="After Gallery"
          description="Real results from real patients. Every transformation is a testament to personalized care and advanced techniques."
          badge="Our Results"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        />
        <Gallery />
        <Appointment />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
