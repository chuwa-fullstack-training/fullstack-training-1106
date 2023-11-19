// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;         // a is in funciton scope, a = 5
  if (a > 5) {
    a = 7;            // a can be accessed from the inner block of the function, a = 7
  }
  console.log(a);     // still in funciton scope, a = 7
}
// Ouput of f(): 7


// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;        // a is in funciton scope, a = 5
  }
  console.log(a);     // still in funciton scope, a = 5
}
// Ouput of f(): 5


// 3. When executed, what value will be output?
function f() {
  a = 3;            // As a is not declared as var, let, nor const, it is declared as global variable, a = 3
}
f();                // Define a global variable a = 3.
console.log(a);     // a is global variable and can be accessed, a = 3
// Output: 3


// 4.
var a = 5;             // a is defined outside the functions. The scope is the whole script and we can treat it as global variable. a = 5
function first() {
  a = 6;               // The global variable a is reassigned to a = 6
}

function second() {
  console.log(a);      
}
first();               // a = 6
second();              // a = 6
// Output: 6


// 5.
var a = 5;            // var a is defined outside the functions. The scope is the whole script and we can treat it as global variable. a = 5
function f() {
  var a = 7;          // var a is in funciton scope, which is different from the global a. The function scope a = 7.
  console.log(a);     // JS will find a in nearest scope which is the function scope a. a = 7
}
// Output of f(): 7


// 6.
var a = 1;            // var a is defined outside the functions. The scope is the whole script and we can treat it as global variable. a = 1
function b() {
  // var a;           // Hoisting of function a() will declare var a in function scope 
  a = 10;             // As there is a variable a in function scope, we will assign function a = 10
  return;
  function a() {}     // The function a() will invoke hoisting, but the function will never run as a return is on the top.
}
b();
console.log(a);       // This line can only access the global a, a = 1. 
// Output: 1
