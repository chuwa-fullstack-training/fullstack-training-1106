14. Explain following code:

//ES6
var x = 10, y = 20;
let obj = { x, y };
console.log(obj); // would it throw error?

//ES5
var x = 10,
  y = 20;
obj = { x: x, y: y };
console.log(obj); // {x: 10, y:20}







`Object literals` make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as above.