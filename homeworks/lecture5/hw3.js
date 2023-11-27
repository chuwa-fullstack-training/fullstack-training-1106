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

/*a
c
e
d
b
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
1
start
success
the order of logs is '1', 'start', 'success'. The synchronous code (like console.log('start')) is executed immediately, while asynchronous operations (like promises) are scheduled to run in the next event loop iteration.
*/
