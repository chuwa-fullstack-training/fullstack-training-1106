// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output: 
 * 5
 * 5
 * 5
 * 5
 * 5
 * Because for loop runs first, and in each iteration, it calls 'setTimeout' callback.
 * When loop iterates end, i equals 5, and after 1000 milliseconds, print value of i which is 5.
 * Since it calls 5 times callback function, and use global scope 'var', all refered to same value 5, 
 * it print out '5' 5 times, and 1000 milliseconds between each print.
 */

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
/**
 * output: 
 * 0
 * 1
 * 2
 * 3
 * 4
 * Because for loop runs first, and in each iteration, it calls 'setTimeout' callback.
 * And using block scope 'let', so in each iteration it prints i value.
 */



// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
/**
 * output: 
 * 0
 * 1
 * 2
 * 3
 * 4
 * Because for loop runs first, and in each iteration, it has 'function(i)' which is a IIFE function 
 * inside, and it was invoked immediately and takes var i as a parameter in current iteration.
 * 
 */


// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
/**
 * output: I am fn
 * Because it first declare function fn  to consloe log 'I am fn', and then call setTimeout to execute
 * current value of 'fn' after 1000 milliseconds. And fn is reassigned to another new function.
 * Because when calling setTimeout, it referenced 'fn' directly, it will use original value of 'fn'
 */


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * output: { name: another obj }
 * Because it first declared obj with name property as 'obj', and in the end, it updated the obj name,
 * but inside setTimeout, it's not referencing the obj immediately, 
 * it called '()=>console.log(obj)', passing a different anonymous function, and by that time, it has
 * the updated value, which is 'another obj'
 * 
 */

