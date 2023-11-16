// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubleNumbers(array) {
    return array.map(arr => arr*2);
}

// test cases
console.log(doubleNumbers([1,2,3])) // Output: [2, 4, 6]
console.log(doubleNumbers([234,5436])) // Output: [468, 10872]



// 2. Given an array of numbers, return an array of numbers that are even.
function evenNumbers(array) {
    return array.filter(arr => (arr%2 ===0));
}

// test cases
console.log(evenNumbers([1,2,3])) // Output: [2]
console.log(evenNumbers([234,5436])) // Output: [234, 5436]



// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverseStr(str) {
    str = str.split('');
    str = str.map((s, index) => str[str.length-1-index]);
    return str.join('');
}

console.log(reverseStr('hello world')) // Output: dlroW olleH



/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flattenArr(array) {
    return array.reduce((accu, cur) => {
        if(Array.isArray(cur)) {
            accu = accu.concat(flattenArr(cur))
        } else{
            accu.push(cur)
        }
        return accu
    }, [])
}

const arr1 = [[0, 1], [2, 3], [4, 5]];
console.log(flattenArr(arr1)) // Output: [0, 1, 2, 3, 4, 5]
const arr2 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArr(arr2)) // Output: [0, 1, 2, 3, 4, 5, 6]