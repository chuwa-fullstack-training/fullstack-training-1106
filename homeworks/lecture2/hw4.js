// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// 7, because a is at first assigned as 10, and then changed into 7 inside if statement
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}

// 2. When executed, what value will be output?
// 5, var is function's scope, so a is initialized and assigned as 5
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 3. When executed, what value will be output?
// 3, When a variable is assigned without a declaration, it becomes a global variable, therefore, `3` is output.
function f() {
  a = 3;
}
f();
console.log(a);

// 4.
// 6, a is declared in the global scope, after first function is executed, a is changed into 6, and then print out in the second function.
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
// 7, a is firstly declared in the global scope, inside the function, another function scope a is created and print out as 7
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}

// 6.
// 1, global variable a is initialized and assigned as 1, and then function
// b declared function named a, which is hoisted to the top of function b, and then local(function) 
// a is modified to 10, while global a remains 1.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
