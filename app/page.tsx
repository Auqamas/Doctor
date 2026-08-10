import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Treatments from '@/components/Treatments'
import WhyChooseUs from '@/components/WhyChooseUs'
import Gallery from '@/components/Gallery'
import Doctor from '@/components/Doctor'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Blog from '@/components/Blog'
import WorkResults from '@/components/WorkResults'
import Appointment from '@/components/Appointment'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Gallery />
        <Doctor />
        <Testimonials />
        <FAQ />
        <Blog />
        <WorkResults />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
