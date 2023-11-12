// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output? 
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a);
}
//10

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}

// 5
// variables declared with the var keyword are function-scoped, meaning they are accessible 
//throughout the entire function in which they are declared, regardless of block scope. 
// The output will be 5 because a is accessible throughout the entire function f.


// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a);

// 3
// when a variable is assigned a value without being explicitly declared using var, let, 
// or const, it becomes a global variable


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
// The variable a is declared in the global scope and is initially set to 5. 
// The function first is then called, which modifies the global variable a to 6.
// Finally, the function second is called, which logs the current value of the global variable a to the console.

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a);
}
// 7
//When call the function f(), it logs the value of the local variable a (which is 7) to the console.

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
//1
// The global variable a remains unaffected by the local variable inside function b,
// and its value remains 1.
