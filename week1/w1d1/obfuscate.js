var obfuscate = process.argv;

console.log(obfuscate);

var obfuscated = "";

var object = {'4' === 'a', '3' === 'e', '0' === 'o', '1' === 'l'}


for (i = 0; i < obfuscate[2].length; i++){

if (obfuscate[2].charAt(i) === object)

	{

	     obfuscated += object;
	
	} 

else 

	{

	     obfuscated += obfuscate[2].charAt(i)

	}


 }


console.log(obfuscated);
