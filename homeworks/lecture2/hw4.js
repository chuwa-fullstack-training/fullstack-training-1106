// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
// The output value will be 7 since 10 is greater than 5 and this will enter the if statement

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
// The output will be 5 since the condition is always true

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// The output will be 3 since the variable a get redefined in the function

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
// The output will be 6 since in the first function the global variable a get redefined as 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// The output will be 7 since in the function the variable a get redefined as 7, inside the 
// function the var a is masked which means it can only be accessed inside the function.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// The output will be 1 since inside the function b the function a() {} get 
// hoisted to the top of this block of top, which means at the beginning
// of the function b. Therefore the next line a = 10 is assigning the local
// function a to 10 which can only be accessed inside the function b. However
// the global variable a is not changed, it remain 1. Hence, the final output 
// will be 1.
