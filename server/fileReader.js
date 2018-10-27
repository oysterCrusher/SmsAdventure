var fs = require('fs');
fs.readFile('firstStory.txt', 'utf8', main);

function main (err, data)
{
    var textByLine = data.split("\n");
    console.log(textByLine[0]);
};