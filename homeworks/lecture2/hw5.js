// Hoisting

// 1.
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
// First, x has no value initialized so x is undefined and we will get into the first if block,
// when console y, there won't be an error because var y will be hoisted to function scope.
// Second, y will be assigned 5, then goes into the inner if block and assign x as 3.
//Finally console y = 5, and get into the last if block and console y as 5 again.


// 2.
// var x = 3;
// if (x === 3) {
//   var x = 2;
//   console.log(x);
// }
// console.log(x);

// when the statement in if block is is executed, variable x will be overwritten to 2, and as var is effective
//of the scope of function, the second console will still print out x as 2;