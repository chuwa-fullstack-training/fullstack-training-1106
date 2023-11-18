// what is the output of the following code? and explain why?

// 1
// 5 5 5 5 5 is printed after 1 second. Since var does not have block scope its declaration is hoisted. So in every interation it is the same i being updated. And closure capture variable by reference and i reference to 5 in the end.
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 2
// 0 1 2 3 4 is printed after 1 second. Since let has block scope so a new i is created in each iteration.
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// 3
// 0 1 2 3 4 is printed after 1 second. Since i has value of 5 which is primitive type, so it is passed by value. Hence, a new i is copied in each function call in each iteration.
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// 4
// I am fn is printed. Since closure capture variable by reference, and fn at first refrence to the function printing I am fn. Event thought it later reference to anoter funtion, the original reference is not modified and it still points to the I am fn function.
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}

// 5
// { name: 'another obj' }. Since the closure stores the reference the obj's reference is modified before the callback on event loop is executed. 
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';