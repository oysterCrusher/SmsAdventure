'use strict';
const apikey = process.env.CLOCKWORK_API_KEY
const ckw = require('clockwork');

module.exports = class FakeMessenger {

	constructor(number, response) {
		this.number = number;
		this.response = response;
		this.clockwork = ckw({key:apikey})
	}

	write(message) {
		console.log("Sending message to [" + this.number + "] with body [" + message + "]");

		this.response.write(message + "\n");

		this.clockwork.sendSms({ To: this.number.toString(), Content: message}, function(error, resp) {
			if (error) {
				console.log('Something went wrong', error);
			} else {
				console.log('Message sent to',resp.responses[0].to);
				console.log('MessageID was',resp.responses[0].id);
			}
		});
	}
}
