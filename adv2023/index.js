const http = require('http');
const html = require('fs').readFileSync('./index.html');
const PORT = process.env.PORT || 8000

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(html);
})

server.listen(PORT);
console.log(`Server running at http://localhost:${PORT}/`);
