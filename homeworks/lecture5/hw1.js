// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
Output: 5 printed five times, each after a delay of 1 second.
Explanation: The variable i is declared with var, which gives it function scope. 
By the time the setTimeout callbacks are executed (after 1 second), the loop has completed, 
and i has a value of 5. All callbacks refer to this same i, hence 5 is printed five times.
*/

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
Output: 0, 1, 2, 3, 4 printed, each after a delay of 1 second.
Explanation: The let keyword gives i block scope. 
In each iteration of the loop, a new i is created. 
Each setTimeout callback captures its own copy of i, so they print the values from 0 to 4.
*/

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/*
Output: 0, 1, 2, 3, 4 printed, each after a delay of 1 second.
Explanation: Although i is declared with var, the Immediately Invoked Function Expression(IIFE) creates a new scope for each iteration, 
capturing the current value of i in each iteration. This results in the numbers 0 to 4 being printed.
*/

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);                 // I am fn
setTimeout(() => fn(), 1000);         // I am another fn
fn = () => {
  console.log('I am another fn');
}
/*
Output: "I am fn" printed after a delay of 1 second.
Explanation: The setTimeout captures the original fn function when it is set. 
Changing fn afterwards does not affect the function that setTimeout will call.

The first setTimeout(fn, 1000) schedules fn to be called after 1000 milliseconds. 
Since fn is passed directly as a reference, the function that gets queued for execution 
is the one that exists at this point in time, which logs 'I am fn'.

The second setTimeout(() => fn(), 1000) also schedules a call to fn after 1000 milliseconds. 
However, this time fn is wrapped inside an arrow function. This means the actual function to 
be executed will be determined when the arrow function is executed, not when setTimeout is called.
*/

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/*
Output: { name: 'another obj' } printed after a delay of 1 second.
Explanation: The setTimeout captures a reference to obj. 
When its property name is changed before the callback executes, the updated value is reflected in the output. 
JavaScript objects are reference types, so changes to the object are seen by all references to it.
*/