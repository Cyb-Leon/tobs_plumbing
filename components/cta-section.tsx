'use client'

import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  const whatsappLink =
    'https://wa.me/27716432514?text=Hi%2C%20I%20need%20a%20quote%20for%20a%20project'

  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to start
              <br />
              <span className="font-serif italic">your project?</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <p className="text-white/90 text-lg">
              Get in touch today for a free quote. 
              No job is too big or too small.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+27716432514">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-secondary hover:bg-white/90 group font-bold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-white hover:bg-accent/90 border-0"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
