import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import About from '@/components/About'
import Doctor from '@/components/Doctor'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'About Our Clinic | Aesthetic by Dr. Fareena Asghar',
  description:
    'Discover our premium aesthetic & dermatology clinic — a calm, modern space for natural rejuvenation, advanced treatments, and personalized care.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About"
          subtitle="Our Clinic"
          description="A refined aesthetic destination where advanced dermatology care meets comfort, privacy, and naturally beautiful results."
          badge="Our Story"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />
        <About variant="page" />
        <Doctor />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
