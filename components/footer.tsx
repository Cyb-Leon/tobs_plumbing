'use client'

import { Logo, LogoMark } from './logo'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Logo size="md" />
            <p className="text-foreground/60 mt-6 max-w-sm text-sm">
              Reliable Flow. Solid Foundations.
              <br />
              Premium plumbing and construction services in Johannesburg.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-secondary font-bold mb-4 uppercase">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {['Work', 'About', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase() === 'work' ? 'services' : item.toLowerCase()}`}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-secondary font-bold mb-4 uppercase">Services</h4>
            <nav className="flex flex-col gap-3">
              {['Plumbing', 'Paving', 'Tiling', 'JoJo Tanks', 'Boreholes'].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/60">
            {new Date().getFullYear()} TOBS Plumbing & Projects. All rights reserved.
          </p>
          <a
            href="tel:+27716432514"
            className="group flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-semibold"
          >
            <span>New project? Contact us</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Large Background Logo */}
      <div className="relative overflow-hidden py-8 bg-background">
        <div className="flex justify-center opacity-20">
          <LogoMark className="w-[40vw] max-w-xs h-auto" />
        </div>
      </div>
    </footer>
  )
}
