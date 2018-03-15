// Sorts alphabetically

var array = ["John", "Bob", "Alice", "Mary"];
array.sort();

console.log(array);

// Sorts by first digit

var array = [5,2,1,3,4];
array.sort();

console.log(array);

// Sorts by first digit (again, but now incorrect)

var array = [10,2,5,1,9];
array.sort();

console.log(array);

// Sorts from lowest to highest using a function

array.sort(function(a, b){
    return (a - b)
})

console.log(array);

// Sorts from highest to lowest using a function

array.sort(function(a, b){
    return (b - a)
})

console.log(array);
