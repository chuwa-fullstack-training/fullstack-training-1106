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
// The output should be:
// a
// c
// e
// d
// b
//
// console.log and new promise will run before setTimeout, therefore a->c inside the promise the console.log will 
// run before the resolve, so a->c->e->d and setTimeout run last becomes a->c->e->d->b

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
// The output will be:
// 1
// start
// success
//
// When we see the const fn() we know that this function is creating a new promise, then we go inside this function we see 
// that we need to console.log 1 first and wait for promise, and then the console.log start will run while we are waiting for
// the result of promise, and finally we get resolve and console.log success