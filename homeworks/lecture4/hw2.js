// ONLY use map, filter, reduce to solve the following problems:

const arr = [1, 2, 3, 4, 5];
// 1. Given an array of numbers, return an array of numbers that are doubled.
const res1 = [];
const res1_ = arr.map(num => num * 2);
console.log(res1_);
// 2. Given an array of numbers, return an array of numbers that are even.
const res2 = arr.filter((num) => num % 2 === 0);
console.log(res2);
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const arr2 = str.split('');
const res3 = arr2.reduce((accumulator, currentValue) => currentValue + accumulator, '');
console.log(res3);
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const arr3 = [[0, 1], [2, 3], [4, [5, 6]]];
const flattenArr = (arr) => {
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(...flattenArr(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
};


console.log(flattenArr(arr3));