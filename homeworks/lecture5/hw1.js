// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Answer: 5 5 5 5 5
// Reason: setTimeout is a async function, so it will be executed after the for loop.
// And when it is executed, the value of i is 5.


// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Answer: 0 1 2 3 4
// Reason: let is a block scope variable, so it will be executed in each loop.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Answer: 0 1 2 3 4
// Reason: IIFE will be executed immediately, so it will be executed in each loop.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Answer: I am fn
// Reason: setTimeout is a async function, so it will be executed after the for loop.
// And when it is executed, the value of fn is still the first fn, although the value has been reassigned.


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Answer: { name: 'another obj' }
// Reason: When setTimeout is executed, it prints the value of obj. 
// However, the value of one property of obj has been reassigned.
// So the value of obj is still the same object, but the value of property has been changed.
