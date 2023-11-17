// ONLY use map, filter, reduce to solve the following problems:
const { isEqual } = require("lodash");

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(nums) {
    return nums.map((val) => 2 * val);
}

// test cases
console.assert(isEqual(double([1, 2, 3]), [2, 4, 6]), "Test 1 failed");
console.assert(isEqual(double([]), []), "Test 2 failed");
console.assert(isEqual(double([1.2]), [2.4]), "Test 3 failed");

// 2. Given an array of numbers, return an array of numbers that are even.
function getEvenNumbers(nums) {
    return nums.filter(val => (val % 2 === 0));
}

// test cases
console.assert(isEqual(getEvenNumbers([1,2,3]), [2]), "Test 4 failed");
console.assert(isEqual(getEvenNumbers([1,2,4]), [2, 4]), "Test 5 failed");
console.assert(isEqual(getEvenNumbers([1]), []), "Test 6 failed");

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseStr(str) {
    return str.split('').map((_, ind) => (str[str.length-ind-1])).join('');
}

// test cases
console.assert(reverseStr("Hello World") === "dlroW olleH", "Test 7 failed");
console.assert(reverseStr("") === "", "Test 8 failed");

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

console.assert(isEqual(flatten([[0, 1], [2, 3], [4, 5]]), [0, 1, 2, 3, 4, 5]), "Test 9 failed");
console.assert(isEqual(flatten([[0, 1], [2, 3], [4, [5, 6]]]), [0, 1, 2, 3, 4, 5, 6]), "Test 10 failed");
console.assert(isEqual(flatten([]), []), "Test 11 failed");
console.assert(isEqual(flatten([1, 2, 3]), [1, 2, 3]), "Test 12 failed");

// another way to solve this
function flatten2(input) {
    let result = [];
    function helper(arr) {
        // recursive approach
        if (typeof(arr) === "object") { 
            arr.map((val) => (helper(val)));
        } else {
            result.push(arr);
        }
    }
    helper(input);
    return result;
}
