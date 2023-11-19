// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = numbers => numbers.map(x => 2*x);
// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = numbers => numbers.filter(x => x % 2 === 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverseString = str => str.split('').reduce((acc, ch) => ch + acc, '');
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const flattenArr = arr => arr.reduce((acc, arr) => acc.concat(Array.isArray(arr) ? flattenArr(arr) : arr), []);

// Test data
const numbers = [1, 2, 3, 4, 5];
const string = "Hello World";
const nestedArrays = [[0, 1], [2, 3], [4, [5, 6]]];

// Test the functions
console.log(doubleNumbers(numbers)); // [2, 4, 6, 8, 10]
console.log(evenNumbers(numbers));   // [2, 4]
console.log(reverseString(string));  // 'dlroW olleH'
console.log(flattenArr(nestedArrays)); // [0, 1, 2, 3, 4, 5, 6]