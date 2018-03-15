// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {

  arr.forEach(function(name) {
    if (name === "Waldo") {
      found(arr.indexOf("Waldo"));
    }  // execute callback
  });
  }

function actionWhenFound(number) {
  console.log("Waldo has been found at index "+number+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
