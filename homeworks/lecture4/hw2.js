// ONLY use map, filter, reduce to solve the following problems:
const nums_asc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Given an array of numbers, return an array of numbers that are doubled.
const nums_double = nums_asc.map(num => num * 2);
console.log(nums_double);

// 2. Given an array of numbers, return an array of numbers that are even.
const nums_even = nums_asc.filter(num => num % 2 == 0);
console.log(nums_even);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const new_str = str.split("").reduce((acc, char) => {
    return char + acc;
}, "");
console.log(new_str);

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
    let result = [];
    for (let element of arr) {
        let curr = element;
        if (typeof element !== "number") {
            curr = flatten(element);
        }
        result = result.concat(curr);
    }
    return result;
}

const arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flatten(arr1));

const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flatten(arr2));

const arr3 = [[[0], [1]], [[[2]]]];
console.log(flatten(arr3));