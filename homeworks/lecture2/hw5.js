// Hoisting

// 1.
var x;

if (x !== 3) {
  // x is undefined so its not equal to 3 so we get in this if
  console.log(y);
  // we dont have y yet, so its undefined and we will use hoisting to declare at top
  var y = 5;
  if (y === 5) {
    // y equals to 5 due to line 10 declaration
    var x = 3;
    // as hoisting, this line will be transfered to this:
    // x = 3;
    // and it set the value of x to 3, also as if statement is not a scope
    // so it will change the value of x to 3 globally (for this file)
  }
  console.log(y);
  // y is 5, no change to it
}
if (x === 3) {
  // as previously assigned it to 3, so we get in this if statement
  console.log(y);
  // as previously we already hoisting it so we will not assume this as undefined
  // also we made the value change to 5 at line 10 and the scope always keep at the 
  // same position due to all statements are just if so it will still get the value of y 
}
// undefined, 5, 5


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

