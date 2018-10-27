'use strict';

let apikey = process.env.CLOCKWORK_API_KEY
let clockwork = require('clockwork')({key:apikey});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

//  clockwork.sendSms({ To: '<phone nuber>', Content: 'Test!'}, function(error, resp) {
//    if (error) {
//    	console.log('Something went wrong', error);
//	} else {
//		console.log('Message sent to',resp.responses[0].to);
//		console.log('MessageID was',resp.responses[0].id);
//	}
});

});
