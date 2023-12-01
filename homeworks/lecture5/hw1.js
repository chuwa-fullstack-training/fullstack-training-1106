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
 * Since when fn is passed in the setTimeout function, the setTimeout function makes its own copy of the fn, 
 * this won't be affected by the reassignment of fn.
 */
// // 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
/**
 * another obj
 * 
 */