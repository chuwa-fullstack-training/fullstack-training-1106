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

// Answer: a c e d b
// Reason: console.log('b') is in a async function, so it will be executed after the for loop.
// And the Promise is a sync function, so it will be executed immediately.
// After all other console.log are executed, the setTimeout will be executed.


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

// Answer: 1 start success
// Reason: console.logs outside the Promise will be executed immediately, then the Promise will be executed.
