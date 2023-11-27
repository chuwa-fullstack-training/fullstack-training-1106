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
// Output:
// a
// c
// e
// d
// b

// Reason: statement execution order in JS is main func > microtask queue > macrotask queue
// console.log('a') executes immediately
// setTimeout executes immediately and push its callback function ("console.log('b')") into macrotask queue
// console.log('c') executes immediately
// the statements exclude resolve() and reject() in new Promise() executes immediately and callback function for the fulfilled and callback function for the rejected will push into microtask queue
// console.log('e') executes immediately
// push result => console.log(result) into microtask queue
// After main function has finished, in microtask queue:
// pop: console.log('d')
// After microtask queue has finished, in macrotask queue:
// pop: console.log('b')

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
// Output:
// 1
// start
// success

// Reason: 
// In the main function:
// console.log(1) executes immediately
// push res => {console.log(res);} into microtask queue
// console.log('start') executes immediately
// After main function has finished, in microtask queue:
// pop: console.log('success')
// After microtask queue has finished, in macrotask queue:
// Nothing