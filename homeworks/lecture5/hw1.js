// what is the output of the following code? and explain why?

// 1
// Output: 5 5 5 5 5
// setTimeout executed after loop ends and `i` is 5 at this point
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// Output: 0 1 2 3 4
// when using let, each iteration of the loop has its own scope for `i`
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// Output: 0 1 2 3 4
// IIFE created a new scope for the code, similiar to the second case
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// Output: I am fn
// the second assignment doesn't affect output since `setTimeout` captured the first function reference
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// Output: {name: 'another obj'}
// the reference didn't change, `setTimeout` will output the modified object
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';