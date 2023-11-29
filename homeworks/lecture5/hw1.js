// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// The output will be:
// 5
// 5
// 5
// 5
// 5
// This is due to the variable i is a var type which will be hoisted and run before setTimeout.
// This means the for loop with run first and i will increment to 5 and be print out be the setTimeout.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// In this code the variable i is let type which is different from var, this will not be hoisted.
// Therefore, the output will be:
// 0
// 1
// 2
// 3
// 4

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// In this code the function is a IIFE function which will create a new function scope.
// Therefore, even the i is a var type the setTimeout will not be affected. So the 
// output will be:
// 0
// 1
// 2
// 3
// 4

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// In this code the setTimeout will grab the fn value when it get pushed in to the callback queue,
// which means even the fn get changed, the setTimeout will not be affected. Therefore the output
// will be: 'I am fn'

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// This will return 'another obj'. When setTimeout get pushed to the queue, the function it got is a 
// arrow function which points to the object obj, but obj has not been grabbed yet, so the setTimeout 
// does not hold the value of obj, and then the value of obj has been changed to another obj which then 
// be called by the setTimeout. Therefore, the output is 'another obj'.