'use client'

import { Shield, Clock, Award, Wrench, Droplets, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified professionals',
    color: 'bg-secondary',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Emergency response anytime',
    color: 'bg-primary',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Workmanship you can trust',
    color: 'bg-accent',
  },
  {
    icon: Wrench,
    title: 'Expert Team',
    description: 'Skilled craftsmen on every job',
    color: 'bg-secondary',
  },
  {
    icon: Droplets,
    title: 'Water Solutions',
    description: 'Complete backup systems',
    color: 'bg-accent',
  },
  {
    icon: Users,
    title: 'Local Business',
    description: 'Proudly Johannesburg based',
    color: 'bg-primary',
  },
]

export function WhyUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary mb-4 uppercase font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Built on trust
            <br />
            <span className="font-serif italic text-primary">delivering results</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Large Statement */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground max-w-4xl mx-auto leading-relaxed">
            We believe in doing things <span className="text-secondary font-bold">right</span> the first time.{' '}
            <span className="text-foreground/60">
              Quality materials, expert installation, and service that puts you first.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
