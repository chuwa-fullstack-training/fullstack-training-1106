// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map( num => {return num * 2;});
console.log(doubledNumbers);        // [ 2, 4, 6, 8, 10 ]

// 2. Given an array of numbers, return an array of numbers that are even.
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter( num => num % 2 === 0);
console.log(evenNumbers);           // [ 2, 4 ]

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const str = "Hello World";
const reversedStr = str.split('').reduce((accu, char) => char + accu, "");
console.log(reversedStr);           // "dlroW olleH"

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */

const arr = [[0, 1], [2, 3], [4, [5, 6]]];
var flattenArray = function(arr) {
    const flatArr = arr.reduce((accu, element) => {
        if (Array.isArray(element)) {
            accu = [...accu, ...flattenArray(element)];
        } else {
            accu = [...accu, element];
        }
        return accu;
    }, []);
    return flatArr;
}
console.log(flattenArray(arr));     // [0, 1, 2, 3, 4, 5, 6]