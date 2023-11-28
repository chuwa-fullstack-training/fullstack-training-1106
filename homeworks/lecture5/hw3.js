// what is the output in order? and explain why?

// 1
/**
 * console.log('a') is executed immediately.
 * setTimeout(() => console.log('b'), 0) puts the callback in the task queue after 0 milliseconds. It will execute after all currently executing and pending microtasks (Promise callbacks) are complete.
 * console.log('c') is executed immediately after a.
 * The Promise constructor is executed. It immediately logs e and resolves with d. Note that reject('f') is never reached because the resolve('d') call ends the Promise constructor's execution.
 * console.log(result) within the Promise's .then clause is a microtask and is executed after the current execution stack is complete, but before the setTimeout callback, printing d.
 * Finally, setTimeout callback executes, logging b.
 */
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
/**
 * When fn() is called, the Promise constructor is immediately executed, logging 1.
 * The .then on fn() is a microtask and will be queued to run after the current script and all current microtasks have finished.
 * console.log('start') is executed next, logging start.
 * After the execution context of the script is cleared, the microtask queue is processed, logging success.
 */
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
