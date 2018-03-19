var getHTML = require('./callbacks');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printlowercase (html) {

  console.log(html.toLowerCase());

}

getHTML(requestOptions, printlowercase);

