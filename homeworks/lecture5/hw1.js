// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// var i will initialize in the function scope
// setTimeout function will call the web APIs and push its callback function into callback queue.
// After the main function has finished, i will be equal to 5 after the for loop and then JS will invoke the callback functions which is "console.log(i)" to run.
// However, var i is in the function scope, which means "i" in all the callback functions point to the same address, so all the callback functions will get the same parameter.
// Hence, the output is: 5 5 5 5 5

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// The output is: 0 1 2 3 4
// let i will initialize in the block scope
// In each iteration of the for loop, it will initialize a new variable i with the value of the previous one and plus one
// the i in different loops points to different address and as the parameter passes to the callback functions.
// so when the callback functions excute, console.log(i) will take different i to output.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// The output is: 0 1 2 3 4
// In each ieration of the for loop, IIFE will excute immediately and use i as parameter. 
// Because i is primitive data type, JS will just copy the value of i and pass to IIFE.
// Therefore, the callback funcion will get different value of i.

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// The output is: "I am fn"
// the setTimeout function uses fn as the parameter, so when it excutes, it will get the reference of fn.
// the reference and fn both point to the same address "console.log('I am fn');".
// Then fn becomes pointing to different address "console.log('I am another fn');", but it will not do any changes at the reference.
// setTimeout function will call the web APIs and push its callback function into callback queue.
// After the main function has finished, JS will excute the reference of fn which points to "console.log('I am fn');".

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// The output is: { name: 'another obj' }
// console.log(obj) will get the reference of obj
// the reference and the obj both point to the same address
// then "obj.name = 'another obj'" just changes the data in the address. There is no changes to the reference point.
// setTimeout function will call the web APIs and push its callback function into callback queue.
// Therefore, After the main function has finished, when console.log(obj) excutes, the data stores in the reference will be 'another obj'.