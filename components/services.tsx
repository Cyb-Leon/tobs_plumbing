'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Plumbing',
    description: 'Complete plumbing solutions',
    image: '/images/service-plumbing.JPEG',
    color: 'bg-secondary',
  },
  {
    number: '02',
    title: 'Paving',
    description: 'Driveways and patios',
    image: '/images/service-paving.jpg',
    color: 'bg-accent',
  },
  {
    number: '03',
    title: 'Tiling',
    description: 'Floors, walls, bathrooms',
    image: '/images/service-tiling.jpg',
    color: 'bg-primary',
  },
  {
    number: '04',
    title: 'JoJo Tanks',
    description: 'Water storage systems',
    image: '/images/service-tank.jpg',
    color: 'bg-accent',
  },
  {
    number: '05',
    title: 'Boreholes',
    description: 'Drilling and installation',
    image: '/images/service-borehole.jpg',
    color: 'bg-secondary',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-secondary mb-4 uppercase font-semibold">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              What we
              <br />
              <span className="font-serif italic text-primary">deliver</span>
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md text-sm md:text-base">
            Professional craftsmanship across all aspects of plumbing and construction. 
            Every project completed to the highest standards.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <a
              key={service.number}
              href="#contact"
              className={`group relative overflow-hidden bg-white border border-border rounded-lg transition-all duration-500 hover:shadow-xl hover:border-secondary/50 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index === 0 ? 'aspect-square md:aspect-auto md:h-full min-h-[400px]' : 'aspect-[4/3]'}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className={`text-xs font-mono px-2 py-1 rounded ${service.color} text-white`}>{service.number}</span>
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-white group-hover:bg-white">
                    <ArrowUpRight className="w-4 h-4 text-white transition-all duration-300 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div>
                  <h3 className={`font-bold text-white mb-1 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
