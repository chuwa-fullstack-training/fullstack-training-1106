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
'a' - The console.log('a') is a synchronous operation and executes first.
'c' - The console.log('c') is also synchronous and executes immediately after 'a'.
'e' - Inside the promise, console.log('e') is executed synchronously before resolving the promise.
'd' - The then callback for the promise is a microtask and executes after the current script but before any macrotask like setTimeout.
'b' - The setTimeout callback is a macrotask and will execute after all currently queued microtasks have completed.
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
 * 
 *1 - The console.log(1) is inside the Promise constructor and is executed synchronously when fn() is called.
'start' - The console.log('start') is synchronous and executes immediately after the fn() call.
'success' - The then callback for the promise is a microtask and executes after the current script has finished, thus logging 'success'.
 */