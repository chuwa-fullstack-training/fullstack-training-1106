10. Explain following code:

let x = {a:1, b:2, c:{nestedA:1, nestedB:2}, d:4}
let y = {...x}
y.c.nestedB = 4
console.log(x.c.nestedB) // what's the result

y.a = 0;
console.log(x.a);














The result will be 4. This is because the spread operator simply makes a shallow copy, not a deep copy of x. Nested values inside a shallow copy still point to the original.

Shallow copies use less memory than a deep copy, so they are faster if you are not using nested values. But if we want to truly make a copy that has it’s own place in memory and does not point to the original, we must make a deep copy.