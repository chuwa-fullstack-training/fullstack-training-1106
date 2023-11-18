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
 * Output:
 * a
 * c
 * e
 * d
 * b
 * 
 * Reason:
 * console.log('a') first got called. Print "a".
 * Then setTimeout(()=>console.log('b'), 0) is called.
 * ()=>console.log('b') is pushed to the callback queue 
 * waiting to be executed when the call stack and microtask 
 * queue is emptied. Then, console.log('c') is called. 
 * Print "c". Then a promise is created. The function passed
 * in gets called. Inside the function, resolve('d') is called
 * before reject('f'). So, the function inside then will be pushed
 * to the microtask queue waiting for the call stack to be empty to
 * be called before macrotask queue. Then, it execute console.log('e').
 * 'e' will be printed next. reject is called but it has no effect because
 * the promise is first resolved. Then the function in mircotask queue is called 
 * because the call stack is now empty, it prints out 'd'. Now, the function in
 * macrotask queue is called because the callback queue and microtask queue is
 * empty. It prints out 'b'.
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
 * Output:
 * 1
 * start
 * success
 * 
 * Reason:
 * A function fn is defined that returns a new promise.
 * fn is called. A new Promise is created. The function 
 * as the argument for the Promise constructor is called.
 * Within that function, console.log(1) is first called printing
 * out '1'. Then, it resolve('success'), which will put the function printing
 * resolved value 'success' to the console in then() afterward fn() to microtask queue 
 * waiting for the callstack to be empty to be called.
 * Then, console.log('start') is called printing 'start'. Now,
 * the callstack is empty. the first function in microstask is called.
 * It prints out 'success'.
 * 
 */