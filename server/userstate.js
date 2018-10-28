'use strict';
module.exports = class UserState {
	constructor(pos) {
		this.pos = pos;
		this.inventory = [];
	}

	getPos() {
		return this.pos;	
	}

	setPos(pos) {
		this.pos = pos;
	}

	getInventory() {
		return this.inventory;
	}

	addToInventory(item) {
		this.inventory.push(item);
	}

	toString() {
		return "(" + this.pos + ")";
	}
}