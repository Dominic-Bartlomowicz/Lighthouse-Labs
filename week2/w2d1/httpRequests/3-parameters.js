
function getAndPrintHTML (options) {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Printing on a new line:', data);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  })
}

getAndPrintHTML();
