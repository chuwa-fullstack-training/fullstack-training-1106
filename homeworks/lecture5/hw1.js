// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
  * 5
  * 5
  * 5
  * 5
  * 5
  * By the time the setTimeout callback is executed, the for loop has already finished.
  */
// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
  * 0
  * 1
  * 2
  * 3
  * 4
  * let is block scoped, so each iteration of the for loop has its own i variable.
  */

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/*
  * 0
  * 1
  * 2
  * 3
  * 4
  * By wrapping the setTimeout callback in an IIFE, we create a new scope for each iteration of the for loop.
  */

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/*
  * I am fn
  * The reassignment occurs after the setTimeout callback is executed.
  * The callback still references the original function. 
  *
  */

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*
  * { name: 'another obj' }
  * The setTimeout callback is executed after the name property of obj has been reassigned.
  * The callback still references the original object.
  */