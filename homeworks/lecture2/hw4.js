// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7, because a is declared in function scope, so is modified within if.
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// 5, a is available throughout the entire function.
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3. a is global.
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6, first() changes the value to 6, and second() output it.
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
// 7, f has its own local variable, so output 7.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// 1, because function a within b will be hoisted, so a = 10 is assigning 10 to local function a, not global variable.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
