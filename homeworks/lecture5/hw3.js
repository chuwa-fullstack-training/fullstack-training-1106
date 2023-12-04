// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
/**
 * a
 * c
 * e
 * d
 * b
 * a is logged;
 *  setTimeout is called and after 0 msec console.log('b') is pushed into the webapi;
 * c is logged;
 * e is logged;
 *  .then() is called and  console.log(result) is pushed to the callback queue;
 * when current call stack is empty, console.log(result), i.e. microtask, is pushed to the call stack;
 * then call stack is empty again, and microtask is empty, then console.log('b') is pushed to the call stack from the callback queue;
 */

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
/**
 * 1
 * start
 * success
 * console.log(1) is called and 1 is logged;
 * .then() is called and console.log(res) is pushed to the microtask queue;
 * console.log('start') is called;
 * when the current stack is empty, the console.log(res) is pushed to the stack from microqueue;
 */


