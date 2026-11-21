import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 8005);

const MIME = {
  '.wasm': 'application/wasm',
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // Static Files (strictly confined inside v005/)
  let relPath = decodeURIComponent(urlObj.pathname);
  if (relPath === '/') relPath = '/index.html';
  // Block access to .env or server files
  if (relPath.includes('.env') || relPath.startsWith('/api/') || relPath === '/server.mjs') {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  const safePath = path.resolve(__dirname, '.' + relPath);
  if (!safePath.startsWith(__dirname) || !fs.existsSync(safePath) || fs.statSync(safePath).isDirectory()) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }
  const ext = path.extname(safePath).toLowerCase();
  res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
  fs.createReadStream(safePath).pipe(res);
});

server.listen(PORT, () => console.log(`Pilk listening on http://localhost:${PORT}`));
