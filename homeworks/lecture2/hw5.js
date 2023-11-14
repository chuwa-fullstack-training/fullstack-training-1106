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
// In this code the output order will be like the following:
// undefined
// 5
// 5
//
// The var y get hoisted to the top of this block scope but the value is not defined.
// In the first if statement, var x is undefined, which is not equal to 3, so enter the statement 
// now since hoisting happens, the first line of code inside the statement is var y; which declared 
// variable y but the value is undefined, so the first console log will print undefined, and then we assign 
// y to 5 and face the next if statement, now we know y === 5, we enter the statement set the var x to 3
// now we need to print the y again which is now 5. Finally, we enter the last if statement if x === 3
// we print y one more time which remains to be 5. Therefore the result is undefined, 5, 5.

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
// In this code the output order will be like the following:
// 2
// 2
//
// The var x is assigned to 3 initially, we then enter the if statement and change the x to 2 and then
// print out x, then we come out the if statement and print out x again which has already been changed
// to 2 and since this is not a function scope, the var x is a global variable. Therefore, the result will be 2, 2.

