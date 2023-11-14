// Hoisting

// 1.
// undefined
// 5
// 5
// `x` is `undefined` at first so `x !== 3` is true, since y is not declared yet, the first `console.log(y)` outputs undefined
// then y is assigned to 5, `y===5` is true, execute `var x = 3`, which will modify the outer x to 3 as well, the next `console.log(y)` outputs the value of y, 5
// since x is assigned to 3, so the last `console.log(y)` outputs the value of y, 5
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
// 2
// `var x = 2` modified the outer x to 2
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

