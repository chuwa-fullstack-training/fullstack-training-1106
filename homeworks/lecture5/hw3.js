// what is the output in order? and explain why?

// 1
console.log('a');
// This line executes immediately, and outputs 'a'.
setTimeout(() => console.log('b'), 0);
// setTimeout appends the callback to the macrotask queue
// - macrotask queue:
//    console.log('b')
console.log('c');
// This line executes immediately, and outputs 'c'.
// - macrotask queue:
//    console.log('b')
new Promise((resolve, reject) => {
  resolve('d');
  // The resolve callback is appended to the microtask queue.
  // - macrotask queue:
  //    console.log('b')
  // - microtask queue 
  //    console.log(result)
  console.log('e');
  // This line executes immediately, and outputs 'e'.
  // - macrotask queue:
  //    console.log('b')
  // - microtask queue 
  //    console.log(result)
  reject('f');
  // As resolve is been executed, the promise is already in resolve state.
  // The reject line will be ignored. 
}).then(result => console.log(result));
// After the main code flow is finished, 'a', 'c', and 'e' are output. 
// Then, the processes in microtask queue will be executed. 
// The parameter 'result' which points to 'd' will be output.
// When microtask queue is empty, the processes in macrotask queue will be executed.
// 'b' will be output
// Hence, the final output will be: a c e d b
 

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});
// When fn is invoked, the line "console.log(1)" will be executed immediately and output '1'
// The resolve callback is appended to the microtask queue.
// - microtask queue 
//    console.log(res)

console.log('start');
// The line will be executed immediately and output 'start'
// After the main code flow is finished, '1' and 'start' are output. 
// Then, the processes in microtask queue will be executed. 
// The parameter 'res' which points to 'success' will be output.
// Hence, the final output will be: 1 start success

