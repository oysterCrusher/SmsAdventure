'use strict'

const fs = require('fs');

module.exports = class FileReader {
    
	constructor() {
        var data = fs.readFileSync('./server/firstStory.txt','utf8');
        var textByLine = data.split("\n");
        // console.log(textByLine);
        return textByLine;
    }
}