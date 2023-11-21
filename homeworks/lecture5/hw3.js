// what is the output in order? and explain why?

1
console.log('a'); // synchronous operation executes immediately
setTimeout(() => console.log('b'), 0); // setTimeout is asynchronous and is placed in the Web APIs environment, macrotask
console.log('c'); // executes immediately
new Promise((resolve, reject) => {
  resolve('d'); 
  console.log('e'); // synchronous execution of the Promise
  reject('f');
}).then(result => console.log(result)); // The .then() callback is asynchronous and is part of the microtasks queue
// Output: a, c, e, d, b
// There is three immediate output `a`, `c`, `e`; and then the microtask which prints `d`, finally the macrotask `b`

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => { // The promise returned by fn is executed, which is synchronous
  console.log(res); // microtask which executes after all synchronous operation
});

console.log('start'); // Synchronous operation, executed immediately

// Output: 1, start, success
// There are 2 immidiate output `1`, `start`, and one then one asnychronous `success`

