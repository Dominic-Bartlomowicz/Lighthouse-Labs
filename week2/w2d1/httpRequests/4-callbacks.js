
function getHTML (options,callback) {

  var https = require('https');

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

      var dataString = "Chunk Received. Printing on a new line: " ;
s
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      // console.log("Chunk Received. Printing on" + data.concat("\n"));
	callback(dataString + data.concat("\n"));
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      // console.log('Response stream complete.');
	callback('Response stream complete.');
    });

  })
}

function printHTML (html) {
  console.log(html);
}

function printHtmlUpper(html) {
console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};



getHTML(requestOptions, printHTML);
getHTML(requestOptions, printHtmlUpper)
