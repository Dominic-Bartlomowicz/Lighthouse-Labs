// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr.indexOf("Waldo"));   // execute callback
    }
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(result) {
  console.log("The result is:", result);
});
