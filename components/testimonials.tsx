'use client'

const testimonials = [
  {
    quote: 'Tobs arrived within the hour and fixed our burst pipe immediately. Professional, clean work.',
    author: 'Thabo M.',
    location: 'Sandton',
    color: 'bg-secondary',
  },
  {
    quote: 'Our new paving has transformed the property. The attention to detail is exceptional.',
    author: 'Sarah K.',
    location: 'Randburg',
    color: 'bg-accent',
  },
  {
    quote: 'Best decision we made was getting a borehole installed. Reliable water supply year-round.',
    author: 'Michael D.',
    location: 'Midrand',
    color: 'bg-primary',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary mb-4 uppercase font-semibold">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What our clients
            <br />
            <span className="font-serif italic text-primary">are saying</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
            >
              {/* Color accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${testimonial.color}`} />
              
              <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-8 pt-4 border-t border-border">
                <p className="text-sm font-bold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-foreground/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
