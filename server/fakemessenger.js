'use strict';
module.exports = class FakeMessenger {
	
	constructor(number, response) {
		this.number = number;
		this.response = response;
	}

	write(message) {
		this.response.write(message + "\n");
		console.log("Sending message to [" + this.number + "] with body [" + message + "]");
	}
}
