'use strict';
module.exports = class UserState {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	getX() {
	    return this.x;	
	}

	getY() {
	    return this.y;	
	}

	up() {
		this.y--;
	}
	
	right() {
		this.x++;
	}
	
	down() {
		this.y++;
	}
	
	left() {
		this.x--;
	}
	
	toString() {
		return "(" + this.x + "," + this.y + ")";
	}
}