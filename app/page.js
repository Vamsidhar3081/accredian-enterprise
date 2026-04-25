import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Programs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
