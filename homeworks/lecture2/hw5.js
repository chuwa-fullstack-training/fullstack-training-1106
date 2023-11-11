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
// undefined
// 5
// 5

// 2.
// console.log("Problem 2");
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2
// 2
// 因为var没有块级作用域，所以第二个x会覆盖第一个x
