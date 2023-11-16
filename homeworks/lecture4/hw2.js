// ONLY use map, filter, reduce to solve the following problems:

nums = [1, 2, 3, 4, 5];
// 1. Given an array of numbers, return an array of numbers that are doubled.
var answer1 = nums.map(num => num * num);
console.log('Map function gets doubled numbers: ' + answer1);

// 2. Given an array of numbers, return an array of numbers that are even.
var answer2 = nums.filter(num => num % 2 === 0);
console.log('Filter function gets even numbers: ' + answer2);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
var string = 'Hello World';
var reversedString = string.split('')
    .map((char, _, arr) => arr[arr.length - 1 - arr.indexOf(char)])
    .reduce((acc, char) => acc + char, '');

// an alternative way would be string = string.split('').reverse().join('')
console.log('Reverse array the result is: ' + reversedString);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, []);
}

const arr1 = [[0, 1], [2, 3], [4, 5]];
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];

console.log(flattenArray(arr1));
console.log(flattenArray(arr2));