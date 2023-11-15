// ONLY use map, filter, reduce to solve the following problems:

let test = [0, 1, 3, 2, 19];
// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleTest = test.map((value) => value * 2);
console.log(doubleTest);

// 2. Given an array of numbers, return an array of numbers that are even.
const evenTest = test.filter((value) => value % 2 === 0);
console.log(evenTest);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
test = "Hello World";
const reverseTest = test
  .split("")
  .reduce((accumulator, value) => value + accumulator, "");
console.log(reverseTest);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

var flatten = function (arr) {
  return arr.reduce((accumulator, value) => {
    if (Array.isArray(value)) {
      accumulator.push(...flatten(value));
    } else {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
};
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(flatten(arr));

const arr2 = [
  [0, 1],
  [2, 3],
  [4, [5, 6]],
];
console.log(flatten(arr2));
