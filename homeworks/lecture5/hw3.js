// what is the output in order? and explain why?

// 1: a c e d b
/*  'a', 'c' and 'e' are logged synchronously，
  ’setTimeout‘ will be queued in Macrotask Queue.
    Promise.then() will be queued in Microtask Queue. 
    After synchronous execution, functions in Microtask Queue will be executed first, so 'e' is printed.
    Finally, Microtask Queue is empty, ’setTimeout‘ will be executed to print 'b'
*/
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));

// 2: 1 start success
/* first, fn() is called, the executor function of the Promise is executed immediately to print '1'.
  Promise.then() will be queued in Microtask Queue. 
'start' are logged synchronously，
After synchronous execution, functions in Microtask Queue will execute to print "success"
*/
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');
