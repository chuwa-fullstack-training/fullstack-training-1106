// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(n){
    return 2*n
}
arr1 = [1,2,3,4,5];
let new_arr1 = arr1.map(double);
console.log(new_arr1);

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumber(n){
    if(n%2 === 0){
        return n;
    }
}
arr2 = [1,2,3,4,5];
let new_arr2 = arr2.filter(evenNumber);
console.log(new_arr2);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
    return str.split('').reduce(function(acc, char) {
      return char + acc;
    }, '');
  }
str = "Hello World";
let newStr = reverseString(str);
console.log(newStr);

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
// Flatten an array of arrays using map, filter, and reduce
const flattenArray = (arr) => {
  return arr.reduce((result, current) => {
    return result.concat(Array.isArray(current) ? flattenArray(current) : current);
  }, []);
};

// Example 1
const arr3 = [[0, 1], [2, 3], [4, 5]];
const flattenedArr1 = flattenArray(arr3);
console.log(flattenedArr1); // Output: [0, 1, 2, 3, 4, 5]

// Example 2
const arr4 = [[0, 1], [2, 3], [4, [5, 6]]];
const flattenedArr2 = flattenArray(arr4);
console.log(flattenedArr2); // Output: [0, 1, 2, 3, 4, 5, 6]
