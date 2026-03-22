// server.js (Create this file in your root)
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const app = next({ dev: false }); // Force production mode
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(3000); // Port is handled by cPanel, 3000 is default for local testing
});