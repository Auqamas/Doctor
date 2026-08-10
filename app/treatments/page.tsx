import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Treatments from '@/components/Treatments'
import WhyChooseUs from '@/components/WhyChooseUs'
import Appointment from '@/components/Appointment'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Treatments | Aesthetic by Dr. Fareena Asghar',
  description:
    'Explore our full range of premium aesthetic treatments — from Botox and dermal fillers to HydraFacial, PRP therapy, and laser hair removal.',
}

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Our"
          subtitle="Treatments"
          description="Advanced aesthetic medicine tailored to your unique skin goals — safe, effective, and results-driven."
          badge="What We Offer"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Treatments' }]}
        />
        <Treatments />
        <WhyChooseUs />
        <Appointment />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
