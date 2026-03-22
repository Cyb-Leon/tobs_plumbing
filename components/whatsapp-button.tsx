'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappLink =
    'https://wa.me/27716432514?text=Hi%2C%20I%20need%20plumbing%20assistance'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  )
}
