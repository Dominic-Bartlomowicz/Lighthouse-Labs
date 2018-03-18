var args = process.argv.slice(2);;

var diceroll = [];

for(var i = 0; i < args; i++){

var random = Math.floor(Math.random() * 6) + 1
diceroll.push(random);

}

console.log("rolled " + (args) + " dice: " + diceroll);
