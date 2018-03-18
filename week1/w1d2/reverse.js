var input = process.argv[2];

if (input) {

  var original = input;

  console.log(reverse(input));

  function reverse(input) {
  return input.split("").reverse().join("");

  }
}
