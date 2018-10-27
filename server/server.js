'use strict';

//let apikey = process.env.CLOCKWORK_API_KEY
//let clockwork = require('clockwork')({key:apikey});

// let port = process.env.SMS_PORT;
let port = 3000;

const http = require('http');
const url = require('url');
const Messenger = require("./fakemessenger.js");
const gamestate = require('./gamestate.js');

const hostname = '0.0.0.0';

const server = http.createServer((req, res) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let queryData = url.parse(req.url, true).query;
  let number = queryData.from;
  let message = queryData.content;

  if (number && message) {
	let response = new Messenger(number, res);
    gamestate.process(number, message, response);
  }

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
