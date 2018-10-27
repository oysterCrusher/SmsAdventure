'use strict';

let apikey = process.env.CLOCKWORK_API_KEY
let clockwork = require('clockwork')({key:apikey});

const http = require('http');

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => { 
  console.log("hello world");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Thanks');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http:${hostname}:${port}/`);

//  clockwork.sendSms({ To: '<phone nuber>', Content: 'Test!'}, function(error, resp) {
//    if (error) {
//    	console.log('Something went wrong', error);
//	} else {
//		console.log('Message sent to',resp.responses[0].to);
//		console.log('MessageID was',resp.responses[0].id);
//	}
});

});
