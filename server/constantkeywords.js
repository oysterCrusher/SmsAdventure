'use strict';
module.exports = class ConstantKeywords {
	
	constructor() { }

	process(message, currentstate, response) {
		if (message.toLowerCase().includes("basket")) {
			let inventory = currentstate.getInventory();
			let namedinventory = inventory.map(i => { return i.name })
			
			if (inventory.length == 0) {
				response.write("Basket is empty");
			} else {
				response.write("Current basket [" + namedinventory + "]");
			}
			
			return true;
		}
		return false;
	}
}