function test() {
  var myVar;
  console.log(myVar); // Outputs: undefined
  myVar = 'Hello, World!';
}
test();

console.log(myVar); // Outputs: Hello, World!

// let
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization

let myLetVar = 'Hello, Let!';

console.log(myLetVar); // Outputs: Hello, Let!

// const
console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization

const myConstVar = 'Hello, Const!';

console.log(myConstVar); // Outputs: Hello, Const!
