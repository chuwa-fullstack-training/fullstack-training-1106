// Hoisting

// 1.
// undefined, y is hosited but not assigned yet
// 5, y is assigned 5
// 5, var variables does not have block scopes so var x in the inner if is hoised to the outer scope and overwrites outer var x
var x;

if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}


// 2.
// 2 
// 2  var variable does not have block scope so the inner var x overwrites the outer var x
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

