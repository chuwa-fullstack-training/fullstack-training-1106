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
//After hoisting, var x and var y is defined at the top, at that time x is undefined so x !== 3
//y is undefined, so console.log(y) output undefined
//then y = 5, enter if, x = 3, bacause x is not defined within a function, it is a global variable
//console.log(y) output 5
//x === 3, enter if
//output: undefined 5 5

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
//enter if, global variable x value change to 2
//output 2 2

