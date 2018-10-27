'use strict';

const fs = require('fs');

module.exports = class Maze {
	constructor() {
		let data = fs.readFileSync('./server/firstStory.txt','utf8');
		console.log(data);
		
		this.mapp = JSON.parse(data);
		console.log(this.mapp);
	}

    getMessage(pos) {
        return this.mapp[pos]['text'];
	}

	startPos() {
		return 0;
	}
}
