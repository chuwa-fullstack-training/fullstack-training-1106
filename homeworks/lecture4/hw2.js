// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
    const double = (arr) => arr.map((num) => num * 2);

// 2. Given an array of numbers, return an array of numbers that are even.
    const even = (arr) => arr.filter((num) => num % 2 === 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
    const reverse = (str) => str.split("").reduce((rev, char) => char + rev, "");


/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenRecursive = (arr) => 
    arr.reduce((acc, val) => acc.concat(Array.isArray(val)? flattenRecursive(val): val), []);
const arr = [[0, 1], [2, 3], [4, [5, 6]]];
const flattened = flattenRecursive(arr);
console.log(flattened);