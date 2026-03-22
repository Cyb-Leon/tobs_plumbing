import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
