var reverse = process.argv;

string = "";

for(var i = 2; i < reverse.length; i++)

{

var word = reverse[i];

for(var j = word.length-1; j>=0; j--)

	{
		string += word[j];
	}


console.log(string);
string = "";

}













