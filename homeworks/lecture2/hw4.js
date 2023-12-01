// // Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
// function f() {
//   var a = 10;
//   if (a > 5) {
//     a = 7;
//   }
//   console.log(a);
// }

/**
 * 7 will ne printed, since var a is a function variable, its scope is the whole function;
 */
// // 2. When executed, what value will be output?
// function f() {
//   if (true) {
//     var a = 5;
//   }
//   console.log(a);
// }
//  the output print is 5, since var could be either function scope or global variable.
//  In this case the var a is a function scope variable, so it is declared in the whole function.
// // 3. When executed, what value will be output?
// function f() {
//   a = 3;
// }
// f();
// console.log(a);
/**
 * in JS, if a variable is not explictly declared, it becomes an inplict global variable. 
 * In this case, a becomes an implict global variable, so after invoking f(), the global variable a is declared and given the value 3.
 */

// // 4.
// var a = 5;
// function first() {
//   a = 6;
// }


// function second() {
//   console.log(a);
// }
// first();
// second();
/**
 * a is a global variable, was intialized as 5 but was modified to 6 in first().
 */

// // 5.
// var a = 5;
// function f() {
//   var a = 7;
//   console.log(a);
// }
/**
 * a is both declared in a function and globally. 
 * The declaration in the function shadows the global declararion.
 * so in the function scope, a is 7.
 */
// // 6.
// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);
/**
 * the declaration of function a is hoisted to the top inside function b and shadows the declaration of global var a.
 * So the value 10 is assigned to function a, instead of global var a. The global var a is still 1.
 */