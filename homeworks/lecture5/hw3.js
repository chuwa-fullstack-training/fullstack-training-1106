// what is the output in order? and explain why?

// 1
// Output: a c e d b
// a c e output from console.log and d b (f) are put into event loop, since `then` block in the microtask queue, `d` output first
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2
// Output: 1 start success
// 1 start are output from console.log, success output from event loop
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
