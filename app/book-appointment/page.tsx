import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Appointment from '@/components/Appointment'
import Testimonials from '@/components/Testimonials'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Book an Appointment | Aesthetic by Dr. Fareena Asghar',
  description:
    'Book your consultation with Dr. Fareena Asghar today. Choose your preferred treatment, date, and time — it only takes a minute.',
}

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Book Your"
          subtitle="Consultation"
          description="Take the first step toward naturally beautiful skin. Fill in the form below and our team will confirm your appointment within 24 hours."
          badge="Book Now"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Book Appointment' }]}
        />
        <Appointment />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
