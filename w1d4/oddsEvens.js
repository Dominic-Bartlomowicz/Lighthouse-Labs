var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];

var evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);

var odds = numbers.filter(function(num) {
  return (num % 2 !== 0);
});
console.log("Subset of odd numbers:", odds);
