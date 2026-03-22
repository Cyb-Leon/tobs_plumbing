'use client'

import { useState } from 'react'
import { Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/27716432514?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-xs tracking-[0.3em] text-secondary mb-4 uppercase font-semibold">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Let&apos;s talk about
              <br />
              <span className="font-serif italic text-primary">your project</span>
            </h2>

            <div className="flex flex-col gap-6 mt-12">
              <a
                href="tel:+27716432514"
                className="group flex items-start gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-foreground/60 mb-1">Call us</p>
                  <p className="text-foreground font-bold">+27 71 643 2514</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://wa.me/27716432514?text=Hi%2C%20I%20need%20plumbing%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 bg-background rounded-lg hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-foreground/60 mb-1">WhatsApp</p>
                  <p className="text-foreground font-bold">Message us directly</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-foreground/60 mb-1">Location</p>
                  <p className="text-foreground font-bold">Johannesburg, South Africa</p>
                  <p className="text-sm text-foreground/60">Serving the greater Johannesburg area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background rounded-xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-xs text-secondary mb-2 uppercase tracking-wider font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg py-3 px-4 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs text-secondary mb-2 uppercase tracking-wider font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg py-3 px-4 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs text-secondary mb-2 uppercase tracking-wider font-semibold">
                  Service Needed
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg py-3 px-4 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Paving">Paving</option>
                  <option value="Tiling">Tiling</option>
                  <option value="JoJo Tank">JoJo Tank Installation</option>
                  <option value="Borehole">Borehole Drilling</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-secondary mb-2 uppercase tracking-wider font-semibold">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-border rounded-lg py-3 px-4 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 mt-4 group font-bold"
              >
                Send via WhatsApp
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
