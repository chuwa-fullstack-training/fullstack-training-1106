// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output? 
// 7
function f1() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log("the output should be 7 -> ", a);
}
f1();

// 2. When executed, what value will be output?
// 5
function f2() {
  if (true) {
    var a = 5;
  }
  console.log("the output should be 5 -> ", a);
}
f2();

// 3. When executed, what value will be output?
// 3
function f3() {
  a = 3;
}
f3();
console.log("the output should be 3 -> ", a);

// 4. output: 6
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log("the output should be 6 -> ", a);
}
first();
second();

// 5. output: 7
var a = 5;
function f() {
  var a = 7;
  console.log("the output should be 7 -> ", a);
}
f()

// 6. output: 1
var a = 1;
function b() {
  a = 10;
  return;
  function a() { }
}
b();
console.log("the output should be 1 -> ", a);
