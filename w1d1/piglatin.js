var piglatin = process.argv;
var duplicate = [];

for(var i = 2; i < piglatin.length; i++) {

	var word = piglatin[i];
	string = "";

	for(var j = 1; j < word.length; j++) {
		string += word[j];
	}


	var firstletter = word[0];

	console.log(duplicate)

	var phrase = [];
	phrase.push(string + word[0] + "ay");

	var duplicate = phrase;

	var array3 = phrase.concat(duplicate);

}

console.log(array3);
