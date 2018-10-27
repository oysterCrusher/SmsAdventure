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
	userstates[number.toString()] = new UserState(map.startX(), map.startY());

	// And just respond saying we've started.
	response.write("Let the games begin!");
}

function processMessage(number, currentstate, message, response) {
	console.log("Processing message from number[" + number + "] with contents [" + message + "]");
	console.log("The current state is something like [" + currentstate + "]");

	// Yeah, I'll stop this being so repetitive at some point.
	if (message.includes("up")) {
		if (map.upFrom(currentstate.getX(), currentstate.getY())) {
			currentstate.up();
			// This probably isn't required.
			userstates[number.toString()] = currentstate;
			response.write(maze.getMessage(currentstate.getX(), currentstate.getY()));
			
			if (map.isEnd(currentstate.getX(), currentstate.getY())) {
				response.write("CONGRATULATIONS!!!!!");
				delete userstates[number.toString()];
			}
			
			return;
		}
	} else if (message.includes("right")) {
		if (map.rightFrom(currentstate.getX(), currentstate.getY())) {
			currentstate.right();
			// This probably isn't required.
			userstates[number.toString()] = currentstate;
			response.write(maze.getMessage(currentstate.getX(), currentstate.getY()));
			return;
		}
	} else if (message.includes("down")) {
		if (map.downFrom(currentstate.getX(), currentstate.getY())) {
			currentstate.down();
			// This probably isn't required.
			userstates[number.toString()] = currentstate;
			response.write(maze.getMessage(currentstate.getX(), currentstate.getY()));
			return;
		}
	} else if (message.includes("left")) {
		if (map.leftFrom(currentstate.getX(), currentstate.getY())) {
			currentstate.left();
			// This probably isn't required.
			userstates[number.toString()] = currentstate;
			response.write(maze.getMessage(currentstate.getX(), currentstate.getY()));
			return;
		}
	}

	// And respond saying we've updated the state.
	response.write("That's not a valid option!");
}
