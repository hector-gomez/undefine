#!/usr/bin/env node

var fs = require('fs');

if (process.argv.length < 3 || process.argv.length > 4) {
    throw "Illegal number of arguments";
}

// Read the input file
var input = fs.readFileSync(process.argv[2]);

// Remove define calls
var re = /(\W?)(define)(\W)/g;
var output = input.toString().replace(re, function (match, p1, p2, p3) {
    return p1 + '_defi_' + p3;
});

// Remove require calls
re = /(\W?)(require)(\W)/g;
output = output.replace(re, function (match, p1, p2, p3) {
    return p1 + '_requi_' + p3;
});

if (process.argv[3]) {
    // Write the output file
    fs.writeFileSync(process.argv[3], output);
} else {
    // Use stdout
    console.log(output);
}
