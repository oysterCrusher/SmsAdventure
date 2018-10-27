'use strict';
module.exports = class UserState {
	constructor(pos) {
		this.pos = pos;
	}

	getPos() {
		return this.pos;	
	}

	setPos(pos) {
		this.pos = pos;
	}

	toString() {
		return "(" + this.pos + ")";
	}
}