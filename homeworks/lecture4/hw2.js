// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
// Example: [1, 2, 3] -> [2, 4, 6]
function double(arr) {
    return arr.map(x => x * 2);
}
// 2. Given an array of numbers, return an array of numbers that are even.
// Example: [1, 2, 3] -> [2]
function even(arr) {
    return arr.filter(x => x % 2 === 0);
}
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
    return str.split('').map((val, idx, arr) => arr[arr.length - 1 - idx]).join('');
}
console.log(reverse('Hello World'));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}
console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]]));
