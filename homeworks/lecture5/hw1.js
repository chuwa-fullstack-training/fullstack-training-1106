// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// because after 1000ms, the setTimeout callback is executed after the loop is finished, so i is 5
// because var is function scoped, so i is 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// because let is block scoped, so i is 0, 1, 2, 3, 4

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// because function(i) is an IIFE (Immediately Invoked Function Expression), so it is executed immediately, so i is 0, 1, 2, 3, 4

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// because setTimeout(fn, 1000) is executed before fn = () => { console.log('I am another fn'); }


// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// { name: 'another obj' }
// because setTimeout(() => console.log(obj), 1000) is executed after obj.name = 'another obj';