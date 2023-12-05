// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

//'5' five times after 1 second
//The variable i is declared with var, which has function scope. By the time the setTimeout callbacks are executed,
// the loop has already finished, and i has a value of 5. Since all the callbacks refer to the same i, they all print 5.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//0, 1, 2, 3, 4 printed each after 1 second.
//The let keyword provides block scope, so each iteration of the loop has its own i. 
//The setTimeout callback captures the value of i for each iteration, resulting in printing 0 to 4.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
//0, 1, 2, 3, 4 printed each after 1 second.
//The IIFE creates a new scope for each iteration, capturing the current value of i. 
//Thus, each setTimeout callback refers to the respective i from each iteration.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
//'I am fn' printed after 1 second.
// Changing the reference of fn later does not affect the function passed to setTimeout.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//{ name: 'another obj' } after 1 second
//When its property name is modified before the callback is executed, the change is reflected in the output. 
//The callback logs the current state of the obj when it's executed, which has the updated name property.