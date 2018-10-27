'use strict';
const Maze = require("./maze.js");
const UserState = require("./userstate.js");

const map = new Maze();

//State for each user, keyed on their number.
let userstates = {};

exports.process = (number, message, response) => {
	console.log("Received message from [" + number + "] with content [" + message + "]");

	// Get current state for this number.
	let currentstate = userstates[number];

	if (currentstate) {
		processMessage(number, currentstate, message, response); 
	} else {
		start(number, response);
	} 
};

function start(number, response) {
	console.log("Starting [" + number + "]");

	// Set the users state to the maps starting position.
	let currentstate = new UserState(map.startPos());
	userstates[number.toString()] = currentstate;

	// And just respond saying we've started.
	response.write(map.getMessage(currentstate.getPos()));
}

function processMessage(number, currentstate, message, response) {
	console.log("Processing message from number[" + number + "] with contents [" + message + "]");
	console.log("The current state is something like [" + currentstate + "]");

    if (message.includes("enter")) {
    	currentstate.setPos(1);
    	response.write(map.getMessage(currentstate.getPos()));
    } else {
    	response.write("That's not a valid option!");
    }
}
