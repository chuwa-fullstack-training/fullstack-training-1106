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
// undefined, 5, ?


// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// 2, 2
// for the 1st output: we just make a declare of x which is 2, overwrites the 
// previous declaration
// for the 2nd output: as var is a function scope variable declaration, when
// we re-declare it in the if ()

