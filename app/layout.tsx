import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'TOBS | Plumbing & Projects',
  description:
    'Premium plumbing and construction services in Johannesburg. We build foundations that last.',
  keywords:
    'plumbing Johannesburg, premium plumber, paving, tiling, JoJo tank installation, borehole drilling, water systems, South Africa',
  openGraph: {
    title: 'TOBS | Plumbing & Projects',
    description: 'Reliable Flow. Solid Foundations.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
