// ONLY use map, filter, reduce to solve the following problems:
nums = [1, 2, 3, 1, 1, 3];
// 1. Given an array of numbers, return an array of numbers that are doubled.
var doubled = nums.map((num) => num * 2);
console.log(doubled);
// 2. Given an array of numbers, return an array of numbers that are even.
var even = nums.filter((num) => num % 2 === 0);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
var str = 'Hello World';
var reversed = str.split('').reverse().join('');
console.log(reversed);
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
    return arr.reduce((acc, curr) => (
        acc.concat((typeof(curr) === 'object') ? (flatten(curr)) : (curr))
    ), []);
}
var arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flatten(arr1));
var arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatten(arr2));