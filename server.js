// server.js - cPanel-optimized Next.js server
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false, dir: path.join(process.cwd()) });
const handle = app.getRequestHandler();

// Get port from environment or use default
const port = parseInt(process.env.PORT || '3000', 10);
const hostname = process.env.HOSTNAME || 'localhost';

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // Add security headers
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=*, camera=(), microphone=()');

    // Enable compression headers
    res.setHeader('Vary', 'Accept-Encoding');

    // Handle the request
    handle(req, res, parsedUrl);
  }).listen(port, hostname, () => {
    console.log(`🚀 Server running at http://${hostname}:${port}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Site URL: ${process.env.NEXT_PUBLIC_SITE_URL || 'not set'}`);
  });

  // Handle server errors
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
  });
});