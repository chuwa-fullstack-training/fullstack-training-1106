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
/**
 * output:
 * undefined
 * 5
 * 5
 *
 * why?
 * We declare x with undefined value.
 * The if statment evaluates to true because undefined is not 3
 * entering the if statment afterward.
 * We declare y using var which effectively move the declarion
 * on top of current scope which is global scope. But we don't
 * move the definition. As a result, the first output is 'undefined'.
 * When we move to 'var y = 5', we simply change y to 5. We then
 * enter the if statment sine it evaluates to true,
 * execute "var x = 3". Because we are not in
 * function, x will be a global variable with value 3.
 * We then log for the second time. But for this time, y is 5 so it got
 * printed to the console. Then we enter the second if statment because
 * x is 3, we then print y for the third time with a value of 5 again.
 *
 *
 */

// 2.
var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);
/**
 * output:
 * 2
 * 2
 *
 * Why?
 * x is set to 3 in the global scope. We then enter the if statement,
 * x is redeclared again with 'var'. But since we are not in function
 * scope, variable masking is not in effect. 'var x' declaration will be moved
 * to the top of global scope. Global variable x is redefined to 2.
 * When we print 'a' within the if statment, the output will be 2.
 * When we print 'a' for the second time, the output will still be 2.
 */
