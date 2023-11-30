// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 5 5 5 5 5
// because we declare i using var which is function-level scope and it will keep increment
// then when it reaches 5, jump out of the for loop, it will wait until timeout finish 
// and the console.log() will use current i value

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 0 1 2 3 4
// because let has block scope that only work for current for loop so each time it will process by block
// which the i will only work at the moment they print out

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// 0 1 2 3 4
// because var is function scope and when we execute IIFE function, each i is given a different function
// so the value would still keep at the value when they pass into the IIFE function

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// I am fn
// because when we pass into setTimeout, we pass a reference to the parameter
// when we change the fn value, it's changed to another function at another address, so it will still keep the old one

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// { name: 'another obj' }
// because we pass in obj's reference and we change the value of the object
// as object is distributed a specific address so when we make the change of inside element, the object address will not change