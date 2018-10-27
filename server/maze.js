'use strict';

var FileReader = require('./FileReader.js');
var linesArray = new FileReader();

module.exports = class Maze {
	constructor() {
		this.mapp = [
			[0, 0, 8, 0, 0],
			[0, 0, 7, 6, 0],
			[0, 0, 0, 5, 0],
			[0, 2, 3, 4, 0],
			[0, 1, 0, 0, 0]
	    ];
	}

    getMessage(x, y) {
        var lineNumber = this.mapp[y][x] - 1;
        return linesArray[lineNumber];
	}

	startX() {
		return 1;
	}
	
	startY() {
		return 4;
	}
	
	upFrom(x, y) {
		let newX = x;
		let newY = y - 1;
		return this.isValid(newX, newY);
	}

	rightFrom(x, y) {
		let newX = x + 1;
		let newY = y;
		return this.isValid(newX, newY);
	}
	
	downFrom(x, y) {
		let newX = x;
		let newY = y + 1;
		return this.isValid(newX, newY);
	}
	
	leftFrom(x, y) {
		let newX = x - 1;
		let newY = y;
		return this.isValid(newX, newY);
	}

	isValid(x, y) {
		if (x < 0 || x >= this.mapp[0].length) {
			return false;
		}

		if (y < 0 || y >= this.mapp.length) {
			return false;
		}
		
		return this.mapp[y][x] != 0;
	}

	isEnd(x, y) {
		return x == 2 && y == 0;
	}
}
