// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = arr => arr.map(num => num * 2);
// 2. Given an array of numbers, return an array of numbers that are even.
const evenNumbers = arr => arr.filter(num => num % 2 === 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
str = "Hello World"
const reverseString = str => str.split('').reduce((rev, char) => char + rev);

console.log(reverseString(str));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flattenArray = arr => arr.reduce(
    (flat, toFlatten) => flat.concat(
        Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
        ),[]
    );
const arr = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArray(arr))