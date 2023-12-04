// what is the output of the following code? and explain why?

// 1
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
/**
 * 5 will be printed 5 times;
 * since the 5 iterations are set sleep for 1 sec, when the 5 arrow functions are called,
 * i is 5; This is because var is global variable in this senario, so all the iterations share the same i reference;
 */

// // 2
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
/** 
 * 0 1 2 3 4 will be printed;
 * this is because the i in this case is a block- scoped variable, 
 * so each iteration will have it own i, which won't be modified by the later iterations;
 */
// 3
// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }
/**
 * 0 1 2 3 4 
 * Since in this case, var i is passed in a function iterations, and each functions in the iteration will have its own var i copied,
 * so it won't be affected by other ierations;
 */

// // 4
// let fn = () => {
//   console.log('I am fn');
// }
// setTimeout(fn, 1000);
// fn = () => {
//   console.log('I am another fn');
// }

/**
 * I am fn 
 * Since when fn is passed in the setTimeout function, the setTimeout function's callback captures the reference of the fn, 
 * even fn is reassigned to another function, but setTimeout function still hold the original refernce of fn.
 */
// // 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * another obj
 * Since when setTimeout function is called, the setTimeout function captures the reference of the obj but not the specific properties of obj,
 * so when obj.name is modified before the log is pushed to the stack, the obj.name is the new value when the log is executed.
 * 
 */



let inter = setInterval(() => {
  console.log('Hello');
}, 2000);
setTimeout(()=>{
  clearInterval(inter);
},10000);
clearInterval(inter);
/**
 * nothing will be printed;
 * since when the setInterval() is called, a 2000 msec timer is set, and when setTimeout() is called, a 10000 msec timer is set, 
 * before either of the timer times up, the clearInterval() is executed, so nothing will be printed
 */
