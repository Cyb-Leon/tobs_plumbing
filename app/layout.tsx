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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tobsplumbingandprojects.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TOBS Plumbing and Projects | Johannesburg Plumber',
    template: '%s | TOBS Plumbing',
  },
  description:
    'Premium plumbing and construction services in Johannesburg. Expert plumbers providing JoJo tank installation, borehole drilling, water systems, paving, and tiling services.',
  keywords: [
    'plumbing Johannesburg',
    'plumber in Thembisa',
    'plumber in Midrand',
    'plumber in Sandton',
    'plumber in Pretoria',
    'plumber in Tembisa',
    'plumber near me',
    'emergency plumber',
    'JoJo tank installation',
    'borehole drilling',
    'water systems',
    'paving services',
    'tiling services',
    'tile installation',
    'plumbing installation',
    'plumbing repairs',
    'plumbing maintenance',
  ],
  authors: [{ name: 'TOBS Plumbing and Projects' }],
  creator: 'TOBS Plumbing and Projects',
  publisher: 'TOBS Plumbing and Projects',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-ZA': `${siteUrl}`,
      'en-US': `${siteUrl}`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'TOBS Plumbing and Projects',
    title: 'TOBS Plumbing and Projects | Premium Plumbing in Johannesburg',
    description: 'Reliable Flow. Solid Foundations. Expert plumbing and construction services.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'TOBS Plumbing and Projects',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOBS Plumbing and Projects',
    description: 'Premium plumbing services in Johannesburg. Reliable Flow. Solid Foundations.',
    images: [`${siteUrl}/twitter-image.jpg`],
  },
  category: 'Business',
  applicationName: 'TOBS Plumbing and Projects',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TOBS Plumbing and Projects',
    image: `${siteUrl}/og-image.jpg`,
    description:
      'Premium plumbing and construction services in Johannesburg. Expert plumbers providing JoJo tank installation, borehole drilling, water systems, paving, and tiling services.',
    url: siteUrl,
    telephone: '+27712345678', // Add your phone number
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    sameAs: [
      // Add social media URLs
      'https://www.facebook.com/tobsplumbingandprojects',
      'https://www.instagram.com/tobsplumbingandprojects',
      'https://www.linkedin.com/company/tobsplumbingandprojects',
    ],
    priceRange: 'R0 - R50000',
    areaServed: {
      '@type': 'City',
      name: ['Johannesburg', 'Thembisa', 'Alexandra', 'Tembisa', 'Rosebank'],
    },
    knowsAbout: [
      'Plumbing Repairs',
      'Plumbing Maintenance',
      'JoJo Tank Installation',
      'Borehole Drilling',
      'Water Systems',
      'Paving Services',
      'Tiling Services',
      'Construction',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
