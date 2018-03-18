var data = process.argv;
var input = data[2];

var fs = require("fs");

console.log("\n");

fs.readFile(input, function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log("Asynchronous read: " + data.toString());
});


// Testing function: type node input.txt in the
//                   console and verify output.
