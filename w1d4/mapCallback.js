var words = ["ground", "control", "to", "major", "tom"];

var map = function(array,found){
  var arr = [];
  for(var i = 0; i < words.length; i++){
  arr.push(found(words[i]));
  }  console.log(arr);
}

  map(words, function(word) {
    return word.length;
  });

  map(words, function(word) {
    return word.toUpperCase();
  });

  map(words, function(word) {
    return word.split('').reverse().join('');
  });
