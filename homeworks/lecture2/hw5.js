// // Hoisting

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

// The output will be undefined, 5, 5.
// The reason is that the second var y; is hoisted to the top of the function scope.
// The first console.log(y); will print undefined because y is not defined yet.
// The second console.log(y); will print 5 because y is defined as 5 in the if statement.
// The third console.log(y); will print 5.


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

// The output will be 2, 2.
// The reason is that the second var x = 2; is hoisted to the top of the function scope.

