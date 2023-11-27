// what is the output of the following code? and explain why?

// 1： 5 5 5 5 5
/* Due to the varible 'i' is decleared by 'var', it is function-scoped value.
    setTimeout is a macrotask, it executes after the loop,
    at that time, the value of 'i' is 5, setTimeout executes 5 times, 'i'(5) is printed 5 times.
*/
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2: 0 1 2 3 4
/* Even though the macrotask setTimeout executes after the loop,
  the varible 'i' is decleared by 'let', it is block-scoped value.
  In each iteration, a new 'i' is created, each setTimeout can only get the value of i from its respective iteration.
*/
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3: 0 1 2 3 4
/*  IIFE captures the current value of i at each iteration and preserves it for use in the setTimeout callback.
*/
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4: I am fn
/* The refrences of the original 'fn' and modified 'fn' are different. 
  The setTimeout function will execute the version of fn that existed at the time it was set up. 
  so setTimeout captured the original reference to fn.
*/
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5: {name: 'another obj'}
/* 'obj' is an object, objects are refrence type.
  The macrotask setTimeout executes after obj is changed, so modified 'obj' is printed.
*/
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';