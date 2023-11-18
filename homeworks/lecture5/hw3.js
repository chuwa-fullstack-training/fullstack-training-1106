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

/**
 * output: 
 * a
 * c
 * e
 * d
 * b
 * It first console log 'a', and then it schedule a setTime out, and was pushed into event queue.
 * and then it print 'c'. 
 * Then a promise created, and inside the promise, it set promise state to resolve and value set to 'd'
 * and print 'e'. Since promise already created resolve, it will ignore reject 'f'.
 * and 'then' method would print 'd'
 * Finally it executes the setTimeout, and push to the call stack, then print 'b' after 0 milliseconds, 
 * 
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

/**
 * output: 
 * 1
 * start
 * success
 * 
 * Because it first calls fn(), and in the new promise it directly print '1', and set promise state
 * to 'success'. Since promise is async function, and it would first process sync function. So it
 * print 'success' then, and finally callback executed, it console log 'success'
 * 
 */