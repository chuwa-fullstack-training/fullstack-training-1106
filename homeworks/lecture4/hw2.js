// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(arr){
    return arr.map(n => n*2);
}
console.log(double([1,2,3])) // Output: [2, 4, 6]

// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumber(arr){
        return arr.filter(n => (n%2 ===0));
}
console.log(evenNumber([1,2,3]));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseString(str) {
    str = str.split('');
    str = str.map((s, index) => str[str.length-1-index]);
    return str.join('');
  }
console.log(reverseString("Hello World"));

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
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

