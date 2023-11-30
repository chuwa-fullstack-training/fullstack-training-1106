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
  * a
  * c
  * e
  * d
  * b
  * The promise is microtask, and setTimeout is macrotask. console.log('b') is executed after the promise is resolved.
  * console.log('e') is executed before the promise is resolved.
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
  * 1
  * start
  * success
  * The console.log(1) inside the promise's function is executed when the promise is created, 
  * console.log('start') is executed after the promise is created, 
  * and console.log(res) is executed after the promise is resolved.
  */
