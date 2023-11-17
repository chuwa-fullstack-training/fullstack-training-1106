// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const arr1 = [1,2,3,4,5];
const res1 = arr1.map( (value, index, array)=> {
    return value*2;
})
console.log(res1);

// 2. Given an array of numbers, return an array of numbers that are even.
const res2 = arr1.filter( num => num%2===0);
console.log(res2);

// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const s = "Hello World";
let res3 = s.split('').reduce( (output, character) => {
    return character + output;
}, '');
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
function flattenArray(arr){
    return arr.reduce( (pre, cur)=>{
        return pre.concat( Array.isArray(cur)? flattenArray(cur): cur);
    },[]);
}
const arr4 = [[0, 1], [2, 3], [4, 5]];
const arr5 = [[0, 1], [2, 3], [4, [5, 6]]];
console.log(flattenArray(arr4));
console.log(flattenArray(arr5));
