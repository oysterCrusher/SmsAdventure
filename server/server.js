'use strict';

let port = 80;

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
});
