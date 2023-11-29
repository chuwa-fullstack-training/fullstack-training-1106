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
/*
Output: 
a
c
e
d
b

Explanation: 
a: main thread in sync exec. console.log('a');

c: main thread in sync exec. console.log('c');

e: The Promise executor function is executed immediately when the Promise is instantiated. console.log('e');

d: Since the promise is already resolved with 'd', this .then() handler is scheduled to run. 
However, it doesn't run immediately but is placed in the microtask queue, 
which is processed after the current script has finished executing but before any task (like timers set with setTimeout) is executed. 
Therefore, d will be logged before b.

b: setTimeout(() => console.log('b'), 0); 
- This schedules a callback to log b after a minimum delay of 0 milliseconds. 
However, even with a delay of 0, the callback is placed in the Web API environment (outside the JavaScript execution stack), 
and it will only be moved to the JavaScript task queue after the current script finishes executing and the JavaScript execution stack is empty. 
This means b will be logged after all the synchronous code has executed and the event loop picks up this callback from the task queue.
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
/*
Output: 
1
start
success

Explanation: 
1: When fn is called at line 45, it immediately executes the executor function of the Promise it returns. console.log(1);

start: main thread in sync exec. console.log('start');

success: After 1 is printed, The resolve('success') call resolves the promise with the value 'success', 
but this does not execute the .then() callback immediately. Instead, the .then() callback is scheduled as a microtask, 
which will be executed after the current script finishes execution but before any other macrotask (like timers or I/O events).
*/