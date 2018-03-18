// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr.indexOf("Waldo"));   // execute callback
    }
  }
}



function actionWhenFound(number) {
  console.log("Waldo has been found at index "+number+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
