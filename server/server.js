var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

function accept(req, res) {

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache',
	'Access-Control-Allow-Origin': '*'
  });

  res.end("Данные успешно отправлены на сервер!");
}

http.createServer(accept).listen(8080);

console.log('Server running on port 8080');