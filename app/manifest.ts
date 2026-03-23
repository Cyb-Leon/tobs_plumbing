import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TOBS Plumbing and Projects',
    short_name: 'TOBS Plumbing Projects',
    description: 'Premium plumbing and construction services in Johannesburg',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#141414',
    scope: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
