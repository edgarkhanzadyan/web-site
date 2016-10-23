const http = require('http');
const fs = require('fs');

const port = 8080;

const httpServer = http.createServer((req, res) => {
  switch (req.url) {
  case '/':
    fs.readFile('public/index.html',
    'utf-8',
    (err, data) => res.end(data));
    break;
  case '/bundle.js':
    fs.readFile('public/bundle.js',
    'utf-8',
    (err, data) => res.end(data));
    break;
  default: res.end('404 Error');
  }
});

httpServer.listen(port, () =>
      console.log(`server on port: ${port}`));
