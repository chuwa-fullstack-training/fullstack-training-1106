// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // y is undefined
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // y is 5
}
if (x === 3) {
  console.log(y); // y is 5
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // x is 2
}
console.log(x); // x is 2

