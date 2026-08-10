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
  title: 'About Dr. Fareena Asghar | Aesthetic & Dermatologist Physician',
  description:
    'Learn about Dr. Fareena Asghar — Aesthetic & Dermatologist Physician — her qualifications, philosophy, and dedication to helping patients achieve naturally beautiful skin.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="About"
          subtitle="Dr. Fareena Asghar"
          description="A decade of expertise, thousands of transformations — and a commitment to natural, confident beauty."
          badge="Our Story"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />
        <About />
        <Doctor />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
