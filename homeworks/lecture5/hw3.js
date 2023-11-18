// what is the output in order? and explain why?

// 1
// a c e d b. a is first pused to call stack, then the callback in settimeout is pused to macrotasks queue. Then c is pused to call stack. Next, new Promise is pused to call stack. In the new Promise, e is pused to call stack. Then d is pused to the microstack tasks queue. The task queues will execute only after all functions on call stack are finished and microtask queue come before macrotask queue.
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// 2 start success. fn() is first pushed to call stack then print 1 is pushed to call stack and print 'success' is pused to task queue. Next, print start is pushed to call stack. After the callstack is cleared, the function in task queue is executed.
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
