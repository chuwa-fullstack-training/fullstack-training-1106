// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(numbers) {
  return numbers.map((num) => num * 2);
}
// test case: console.log(double([1, 2, 3, 4]));

// 2. Given an array of numbers, return an array of numbers that are even.
function even(numbers) {
  return numbers.filter((num) => num % 2 == 0);
}
console.log(even([1, 2, 3, 4]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
  return str.split("").reduce(function (accumulator, char) {
    return char + accumulator;
  }, "");
}
console.log(reverse("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

function Flatten(arr) {
  return arr.reduce((flatternArray, current) => {
    return flatternArray.concat(
      Array.isArray(current) ? Flatten(current) : current
    );
  }, []);
}
console.log(
  Flatten([
    [0, 1],
    [2, 3],
    [4, [5, 6]],
  ])
);
