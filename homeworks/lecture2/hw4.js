// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
/**
 * Output: 7
 * a will be in scope and its value will be 7 because
 * we enter if statment when a > 5 is true because a was
 * 10 before. During if statement, a is modified to 7
 */

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
/**
 * Output: 5
 * "a" is still in scope and accessible
 * because it uses var to declare "a"
 * even it is defined within if statement. Becase a is
 * within the same function scope, we can still access it.
 * a is 5 when it got output to the console.
 *
 */

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
/**
 * Output: 3
 *
 * Since a is not defined in either block-scope, function-scope or global-scope.
 * JS will look for global object in the environment which will be window in
 * client-side browser. And assign window.a to 3 as if we use "var a = 3" in the
 * global scope. When a is logged afterward, a will be the result of window.a
 * which in this case is 3 output to the console.
 *
 */

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();
/**
 * Output: 6
 * 'var a = 5;' defines a global scope variable 'a' with 5
 * In "first()", a in global scope is modified to 6.
 * In "second()", a in global scope is accessed and output
 * to the console with value 6.
 *
 */

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
/**
 * Output: 7
 *
 * "var a = 7" in f() masks out the global scope variable "a"
 * outside of f(). It is then accessed with value 7 and output
 * to the console.
 */

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
/**
 * Output: 1
 * Within b(), function a() {} declaration
 * is moved to the top of b(). As a result,
 * it masks out the global scope variable 'a'
 * outside of b(). Variable 'a' in b() is then
 * modified to 10 but it will not affect the value
 * of global 'a' outside b() because of variable
 * masking. When we are out of b() and
 * console.log(a), the output is 1.
 *
 */
