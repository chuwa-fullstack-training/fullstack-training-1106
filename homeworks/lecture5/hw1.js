// what is the output of the following code? and explain why?

// 1  5,5,5,5,5  because var is function scope, so there will only have one 'i' shared in 5 loops.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2  0,1,2,3,4  because let is block scope, so every loop will have a 'i'.
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3  0,1,2,3,4  IIFE creates a new scope for each iteration, so each setTimeout callback is linked to the i value of its respective iteration.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4  I am fn  because callback function executes current reference which is 'I am fn', when reference changed, it won't affect.
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5  another obj  because when object property changed before callback execute, the updated value is reflected.
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';