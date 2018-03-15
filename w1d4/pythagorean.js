var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(obj => {

  var newObject = {};

  newObject[obj.x] = obj.x * obj.x;
  newObject[obj.y] = obj.y * obj.y;
  newObject = Math.sqrt(newObject[obj.x] + newObject[obj.y]);

  return newObject;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
