// what is the output of the following code? and explain why?

// 1
// output: 5 5 5 5 5
// reason: setTimeout put into callback queue -> for loop will finish execution -> setTimeout start execution -> now i is 5 -> printout 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// output: 0 1 2 3 4
// reason: different from "var i", "let i" has block scope, so it creates a new i for each iteration, thus retaining its own value
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// output: 0 1 2 3 4
// reason: each IIFE will have its own scoped i passed in by iteration loop.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// output: I am fn
// reason: different from question 1, we are passing in callback function immediately, which is () => { console.log('I am fn');} when scheduling setTimeout in queue.
// so reassigning fn will not affect "already passed" reference
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// output: { name: 'another obj' }
// reason: obj is a variable passed into callback function, so when setTimeout is executed, it will try to get content in obj from references. so "obj.name = 'another obj';" will execute before setTimeout and will change obj.
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';