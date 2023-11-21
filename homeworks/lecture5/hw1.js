// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output: 5 will be printed 5 times, each in a different line
// var i is global scope, for each iteration, it schedules a `setTimeout` to run after 1 second and sets up a timer in the Web APIs
// The loop completes all its iterations instantly, and i is changed to 5
// after about 1 second, the timmers complete. The callback functions are then moved to the callback queue, and the JS runtime check the callback queue and execute callbacks from callback queue


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output: 0, 1, 2, 3, 4, each in a seperate line one by one
// let i is block scope, so the each iteration will have its own i value
// i is the primitive type number, so the console.log(i) is passed by value

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// Output: 0, 1, 2, 3, 4, each in a seperate line one by one
// Each iterationis wrapped in an IIFE that takes i as an argument.
// This creates a block scope for each iteration, each setTimeout callback logs the value of i as it was during that iteration

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// Output: I am fn
// First the function with console.log('I am fn') is created and then fn is assigne to it, and then another function object is created and fn is assigned to it
// The key is setTimeout with fn is not the fn pointer, but the reference to the first function object


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// Output: {name: 'another obj}
// obj points to the object, and the modification is directly executed on the obj
// At first, an object obj is defined with a property name set to 'obj'
// setTimeout is set up to log obj after one second. before the callback is executed
// obj.name is changed to 'another obj'. Since objects in JavaScript are referenced by memory address
// not by value, the setTimeout callback logs the current state of obj, which now has name set to 'another obj'
