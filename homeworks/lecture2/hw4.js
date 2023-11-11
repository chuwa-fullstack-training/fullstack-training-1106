// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// 7



// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  // console.log("Problem 2");
  console.log(a);
}
// Nothing
// 因为没调用 f()
// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();

console.log(a);
// undefined
// a = 3 和 log(a) 不在同一个 scope
// btw a 没被声明

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
// 6
// first() 改变了 a 的值
// second() 输出 a 的值

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// nothing because f() is not called
// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// 1
// 因为 a = 10 是给 function a() 赋值，而不是给 var a 赋值
