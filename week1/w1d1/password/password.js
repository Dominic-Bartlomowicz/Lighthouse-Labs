
var obfuscate = process.argv;

console.log(obfuscate);

var obfuscated = "";


 for (i = 0; i < obfuscate[2].length; i++){
   if (obfuscate[2].charAt(i) === 'a'){
     obfuscated += '4'
   } else if (obfuscate[2].charAt(i) === 'e'){
     obfuscated += '3'
   } else if (obfuscate[2].charAt(i) === 'o'){
     obfuscated += '0'
   } else if (obfuscate[2].charAt(i) === 'l'){
     obfuscated += '1'
   } else {
     obfuscated += obfuscate[2].charAt(i)
   }
 }
console.log(obfuscated);



