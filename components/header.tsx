'use client'

import { useState, useEffect } from 'react'
import { Logo, LogoIcon } from './logo'
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all bg-white/80 duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <Logo size="sm" className="sm:flex" />
            {/* <LogoIcon className="h-10 w-10 sm:hidden" /> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-secondary font-medium transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+27716432514"
              className="group flex items-center gap-2 text-sm text-primary hover:text-secondary font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-all duration-500  md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full px-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-16 flex flex-col gap-4">
            <a
              href="tel:+27716432514"
              className="flex items-center gap-3 text-secondary font-bold"
            >
              <Phone className="w-5 h-5" />
              <span>+27 71 643 2514</span>
            </a>
          </div>

          <p className="absolute bottom-8 left-8 text-xs text-foreground/60 tracking-widest font-semibold">
            JOHANNESBURG, SA
          </p>
        </div>
      </div>
    </header>
  )
}
