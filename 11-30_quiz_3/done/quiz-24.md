24. Create a function named promisifyFunction which takes a synchronous function fn with an unspecified argument signature as an argument and returns a function with the same argument signature that returns a promise which resolves to the output of fn with passed arguments.

For example:

If,

const add = (a, b) => a + b
const multiplyByTwo = (c) => c * 263

// Example usage
const promisifiedAdd = promisifyFunction(add);
promisifiedAdd(2, 3).then(result => {
    console.log(result);  // Output: 5
});

const promisifiedMultiplyByTwo = promisifyFunction(multiplyByTwo);
promisifiedMultiplyByTwo(7).then(result => {
    console.log(result);  // Output: 1841
});