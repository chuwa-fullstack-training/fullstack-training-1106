// Hoisting

// 1.
// the output is 5, inside if statement, var y = 5 and var x = 3 are hoisted and move to 
// the top, so the `(x !== 3)` is false, second if statement will be executed and output 5
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
  console.log(y); // 5 (y is the same)
}


// 2.
// 2 in two lines will be printed out. x is firstly declated as 3 in global scope, and then inside
// if statement, x is redeclared as 2 and print out, and after the if statement, another 2 is printed out.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

