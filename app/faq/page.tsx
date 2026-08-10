import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import FAQ from '@/components/FAQ'
import Appointment from '@/components/Appointment'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'FAQs | Aesthetic by Dr. Fareena Asghar',
  description:
    'Find answers to common questions about our aesthetic treatments, booking process, safety, and aftercare.',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Frequently Asked"
          subtitle="Questions"
          description="Everything you need to know about our treatments, safety standards, and what to expect at your consultation."
          badge="FAQs"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
        />
        <FAQ />
        <Appointment />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
