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
// 1st. we assign a as a function scope variable
// 2nd. the value of a is larger than 5
// 3rd. assign a to 7 and as it is a function scope variable, it will change successfully

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
f()
// 5
// var is used as a function scope variable define

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);
// undefined
// a only exists in function f's scope, so we cant know what it is at global

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
// we defined a as a larger function scope in which the value could be read by both functions
// Then we make the change at the first function
// as we are not initializing it to current scope, the value will save as the previous address
// which is the larger scope including first() and second()
// so when we read it from second() function, it will be the assigned value 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
f()
// 7
// as we overwrite the variable 'a' in the function f() and the new value should be 
// what we read in the function

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
// a is defined as a variable with value 1 at bigger scope
// inside function b(), a is assigned to 10 and immediately after that the function return
// but at the last line of b(), we declared an a, which due to hoisting, the declare
// goes all the way before `a = 10` and so that the a inside b() function is a function scope, not the one in bigger scope
// so the bigger scope a will not be modified and we output it as 1
