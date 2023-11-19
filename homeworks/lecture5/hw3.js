// what is the output in order? and explain why?

// 1
// output: a c e d b
// reason: console.log('a'); and console.log('c'); will be executed first (microtask) and setTimeout will be queued in macrotask queue. Then Promise will be queue in microtask queue and executed. Then, resolve('d'); will be queued in microtask queue and console.log('e'); will be executed. Then, resolve('d'); will resolved promise and 'd' will be logged by then(result => console.log(result));
console.log('a');
setTimeout(() => console.log('b'), 0);   // macro task, queued
console.log('c');
new Promise((resolve, reject) => {  // micro task, executed as callback
  resolve('d');  // queued
  console.log('e');  // executed immediately
  reject('f');
}).then(result => console.log(result));

// 2
// output: 1 start success
// 1. fn is declared and fn() is executed
// 2. Promise is executed immediately and console.log(1); is executed
// 3. resolve('success'); and schedule then block in microtask queue
// 4. console.log('start'); is executed
// 5. then block is executed, printing success
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
