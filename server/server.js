var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

function accept(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache'
  });

  res.end("OK");
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');