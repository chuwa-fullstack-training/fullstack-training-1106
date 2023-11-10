// Hoisting

// 1.
var x;

if (x !== 3) {
  console.log(y); // undefined, due to hoisting it's declared but not assigned a value yet.
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5, assigned the 5.
}
if (x === 3) {
  console.log(y); // 5, because y is still in the scope.
}


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x); // 2, redeclared and assigned to 2.
}
console.log(x); // 2, reassigned to 2 before so 2.

