// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7 will be printed
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// 5 will be printed
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3 will be printed
// reason: a will automatically be global scope because it is assigned without using "const, var, let"
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6 will be printed
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
// nothing will be printed because f is not called
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// 1 will be printed
// reason: Inside function b, function a declaration will be hoisted to top in b's scope, making all 'a' in function b local scope
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
