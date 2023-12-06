// ONLY use map, filter, reduce to solve the following problems:

const { resolve } = require("path");

const nums = [1, 2, 3, 4, 5, 6];
// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubled_numbers(nums) {
    return nums.map(num => num * 2);
}
console.log(doubled_numbers(nums));

// 2. Given an array of numbers, return an array of numbers that are even.
function even_numbers(nums) {
    return nums.filter(num => num % 2 == 0);
}
console.log(even_numbers(nums));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(s) {
    const arr = s.split("");
    return arr.reduce((reversed, cur) => cur + reversed, "");
}
let s = "Hello World";
console.log(reverse(s));

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
    // return arr.reduce((flattened, cur) => Array.isArray(cur) ? flattened.concat(flatten(cur)) : flattened.concat(cur), []);
    return arr.reduce((flattened, cur) => flattened.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
}
const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];

console.log(flatten(arr1));
console.log(flatten(arr2));
// function p(v) {
//     return new Promise((resolve, reject) => {
//         resolve(v);
//     })
// }

function p(v) {
    return Promise.resolve(v);
}
p(2).then(res => console.log("res:", res));

// const addTwo = arr => arr.map(num => num + 2)
const addTwo = function (arr) {
    return arr.map(num => num + 2)
}

console.log("addtWO: ", addTwo([1, 2, 3]))

const isOdd = num => num % 2 != 0;
console.log("isodd: ", isOdd(3));
console.log("isodd: ", isOdd(4));