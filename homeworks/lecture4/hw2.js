// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
let numbers = [1,2,3,4,5]
let doubleNum = numbers.map(function (value, index, array) {
    return value * 2;
})
// 2. Given an array of numbers, return an array of numbers that are even.
let evenNumber = numbers.filter(function (value, index, array) {
    if (value % 2 === 0){
        return value;
    }
})
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
let testString = "Hello World";
let StringList = testString.split('');
let initial = '';
let reverseString = StringList.reduce(function (accumulator, currentVal, index, array) {
    return accumulator + testString[StringList.length - index - 1]
}, initial)

/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
let multiArray = [[0, 1], [2, 3], [4, 5]];
let initialArray = [];
function flat(multiArray) {
    return multiArray.reduce(function (accumulator, currentVal) {
        return accumulator.concat(Array.isArray(currentVal) ? flat(currentVal) : currentVal);
}, initialArray)
}