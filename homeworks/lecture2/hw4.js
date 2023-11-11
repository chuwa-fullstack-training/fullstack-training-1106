// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// 5, var declarations does not block scope
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3, a has global scope if no declaration keyword is used
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6, a is overwritten
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5.
// nothing, f() is not executed
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// 1, function a is hoisted so global a is shadowed by the function declaration and functions have function scope so the outer a is accessed in the end
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
