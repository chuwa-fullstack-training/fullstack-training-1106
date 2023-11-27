// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let f1 = arr => arr.map(item => item * 2);

// 2. Given an array of numbers, return an array of numbers that are even.
let f2 = arr => arr.filter(item => item % 2 == 0);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let f3 = s => s.split("").reverse().join("");

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function f4(arr) {
    return arr.reduce((ret, curr) => {
        if (Array.isArray(curr)) {
            ret.push(...f4(curr));
        } else {
            ret.push(curr);
        }
        return ret;
    }, [])
}

module.exports = {
    f1,
    f2,
    f3,
    f4
}