//node sum.js 1 2 3 4 5 rabbit
//When program starts, parameters passed from command line
//Get list of parameters
//Go through list of parameters, find numbers
//Given a list of numbers, add them together
//Show the answer
//This is pseudocode / planning the code.
//General rule: only want to loop over a set of data once


var params = process.argv.slice(2);
var numbers = [];
var total = 0;

for(var i = 0; i < params.length; i++) {
var data = Number(params[i]);
if (data) {
  total += data;
  }
}

console.log("The total is: " + total);


// Always try to trick your code or give it bad data.
// This way, we are more sure that it works correctly.
