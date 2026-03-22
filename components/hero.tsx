'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const whatsappLink =
    'https://wa.me/27000000000?text=Hi%2C%20I%20need%20plumbing%20assistance'

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-plumbing.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/5974567/5974567-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Light gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-white/30" />
      </div>

      {/* Large Typography - Watermark */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none">
        <h1
          className={`text-[18vw] md:text-[15vw] font-bold text-center leading-none tracking-tighter text-secondary/10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          TOBS
        </h1>
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16 mb-16 md:pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-2xl tracking-[0.3em] text-secondary mb-4 uppercase font-bold">
              Plumbing & Projects
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Reliable Flow.
              <br />
              <span className="font-serif italic text-primary">Solid Foundations.</span>
            </h2>
          </div>

          {/* Right Column */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <p className="text-foreground/70 text-sm md:text-base max-w-md">
              Premium plumbing and construction services in Johannesburg.
              From emergency repairs to complete installations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+27716432514" >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 group"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-accent bg-accent text-white hover:bg-accent/90"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        {/* <div
          className={`mt-16 pt-8 border-t border-secondary/20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '10+', label: 'Years Experience', color: 'text-secondary' },
            { value: '500+', label: 'Projects Done', color: 'text-primary' },
            { value: '24/7', label: 'Emergency Service', color: 'text-accent' },
            { value: '100%', label: 'Satisfaction', color: 'text-secondary' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-foreground/60 tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse" />
      </div>
    </section>
  )
}
