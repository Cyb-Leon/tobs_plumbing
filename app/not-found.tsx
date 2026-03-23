import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold text-white">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-slate-200">Page Not Found</h2>
        <p className="mb-8 text-lg text-slate-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-slate-300">Need help? Check these popular pages:</p>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="/#services" className="text-blue-400 hover:underline">
              Our Services
            </Link>
            <Link href="/#gallery" className="text-blue-400 hover:underline">
              Gallery
            </Link>
            <Link href="/#why-us" className="text-blue-400 hover:underline">
              Why Choose Us
            </Link>
            <Link href="/#contact" className="text-blue-400 hover:underline">
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
