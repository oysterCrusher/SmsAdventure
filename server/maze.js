'use strict';
module.exports = class Maze {
	constructor() {
		this.mapp = [
			[0, 0, 1, 0, 0],
			[0, 0, 1, 1, 0],
			[0, 0, 0, 1, 0],
			[0, 1, 1, 1, 0],
			[0, 1, 0, 0, 0]
	    ];
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
		
		return this.mapp[y][x] === 1;
	}

	isEnd(x, y) {
		return x == 2 && y == 0;
	}
}
