const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const root = __dirname;

function sendFile(res, file) {
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      return res.end('Not found');
    }
    const ext = path.extname(file).toLowerCase();
    const types = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp',
      '.ico': 'image/x-icon'
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
    const stream = fs.createReadStream(file);
    stream.on('error', () => {
      if (!res.headersSent) res.statusCode = 500;
      res.end('Server error');
    });
    stream.pipe(res);
  });
}

http.createServer((req, res) => {
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';

    const relative = pathname.replace(/^\/+/, '');
    if (relative.includes('..')) {
      res.statusCode = 400;
      return res.end('Bad request');
    }

    sendFile(res, path.join(root, relative));
  } catch {
    res.statusCode = 400;
    res.end('Bad request');
  }
}).listen(port, '0.0.0.0', () => {
  console.log('AI Daily listening on ' + port);
});