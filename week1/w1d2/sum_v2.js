
var total = process.argv.reduce(function(sum,param) {
  var data = Number(param);
  if (data) {
    sum += data;
    }
    return sum;
  },0);

console.log("The total is: " + total);
