var words = ["ground", "control", "to", "major", "tom"];

function map(words,found){
  var arr = [];
  for(var i = 0; i < words.length; i++){
  arr.push(words[i].length);}
  found(arr);}

function map2(words, found){
    var arr = [];
    for(var i = 0; i < words.length; i++){
    arr.push(words[i].toUpperCase())}
    found(arr);}

function map3(words, found){
      var arr = [];
      for(var i = 0; i < words.length; i++){
      arr.push(words[i].split('').reverse().join(''))}
      found(arr);}


map(words, function(word) {
  console.log(word);
});

map2(words, function(word) {
  console.log(word);
});

map3(words, function(word) {
  console.log(word);
});
