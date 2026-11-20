// PILK v005 Local Static + Upstage Solar Pro Proxy Server (Zero Dependencies)
// Run: node v005/server.mjs  (reads UPSTAGE_API_KEY from env or v005/.env)

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chatHandler from './api/chat.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 8005);

// Lightweight .env loader (checks v005/.env, v005/.env.local, and repo root .env)
for (const envPath of [
  path.join(__dirname, '.env'),
  path.join(__dirname, '.env.local'),
  path.join(__dirname, '..', '.env')
]) {
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
      }
    }
  }
}

const MIME = {
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

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 64 * 1024) reject(new Error('Body too large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // API Endpoint: POST /api/chat
  if (urlObj.pathname === '/api/chat') {
    const raw = req.method === 'POST' ? await readBody(req).catch(() => '{}') : '{}';
    const fakeReq = { method: req.method, body: raw };
    const fakeRes = {
      setHeader: (k, v) => res.setHeader(k, v),
      status: code => ({
        json: obj => { res.statusCode = code; res.end(JSON.stringify(obj)); },
        end: () => { res.statusCode = code; res.end(); }
      })
    };
    await chatHandler(fakeReq, fakeRes);
    return;
  }

  // API Status Check: GET /api/chat-status
  if (urlObj.pathname === '/api/chat-status') {
    const hasKey = Boolean(process.env.UPSTAGE_API_KEY && process.env.UPSTAGE_API_KEY !== 'up_your_api_key_here');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ live: hasKey, model: process.env.UPSTAGE_MODEL || 'solar-pro' }));
    return;
  }

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

server.listen(PORT, () => {
  const hasKey = Boolean(process.env.UPSTAGE_API_KEY && process.env.UPSTAGE_API_KEY !== 'up_your_api_key_here');
  console.log(`PILK v005 server listening on http://localhost:${PORT}`);
  console.log(`Upstage Solar Pro mode: ${hasKey ? 'LIVE (' + (process.env.UPSTAGE_MODEL || 'solar-pro') + ')' : 'DEMO (set UPSTAGE_API_KEY in v005/.env for live Solar Pro)'}`);
});
