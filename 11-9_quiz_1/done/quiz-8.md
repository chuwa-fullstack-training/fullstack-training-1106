What is the difference between var, let and const? [JS]


Answer:






var:
Variables declared with var have function scope or global scope, depending on whether they are declared inside a function or outside any function block.
var declarations are hoisted to the top of their scope, meaning you can use a variable before it's declared, although its value will be undefined until it's assigned.
`var variables can be reassigned multiple times and their values can be changed.`
Example: var x = 10;

let:
Variables declared with let have block scope, meaning they are limited to the block in which they are declared (e.g., inside a loop, if statement, or function).
let declarations are not hoisted, so you need to declare a variable before using it.
`let variables can be reassigned, allowing you to change their values.`
Example: let y = 20;

const:
Variables declared with const also have block scope like let.
const declarations are not hoisted and require an initial value to be assigned at the time of declaration.
const variables are read-only and cannot be reassigned once they are defined. However, if the variable refers to an object or array, the properties or elements of the object or array can be modified.
Example: const z = 30;