// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?       Output: 7
function f1() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
f1();

// 2. When executed, what value will be output?       Output: 5
function f2() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
f2();

// 3. When executed, what value will be output?       Output: 3
function f3() {
  a = 3;
}
f3();
console.log(a);

// 4. When executed, what value will be output?       Output: 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second();

// 5. When executed, what value will be output?       Output: 7
var a = 5;
function f5() {
  var a = 7;
  console.log(a);
}
f5();

// 6. When executed, what value will be output?       Output: 1
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
