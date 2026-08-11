import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Contact from '@/components/Contact'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us | Aesthetic by Dr. Fareena Asghar',
  description:
    'Get in touch with Aesthetic by Dr. Fareena Asghar in Nad Al Sheba 3, Dubai. Call or WhatsApp +971 56 128 0538 or +971 58 990 0137.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Get In"
          subtitle="Touch"
          description="We&apos;re here to answer your questions and help you start your aesthetic journey with confidence."
          badge="Contact Us"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
