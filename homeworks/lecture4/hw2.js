// ONLY use map, filter, reduce to solve the following problems:
var nums = [1,2,3,8];
// 1. Given an array of numbers, return an array of numbers that are doubled.
function doubled(nums){
    return nums.map(e => e*2);
}
console.log(doubled(nums));
// 2. Given an array of numbers, return an array of numbers that are even.
function even(nums){
    return nums.filter(e => e % 2 == 0);
}
console.log(even(nums));

// 3. Reverse the string: "Hello World" -> "dlroW olleH"



function reverse(str){
    const [...arr] = str;
    const initialValue = [];
    const ans = arr.reduce((accumulator,cur) =>{
         accumulator.unshift(cur);
         return accumulator;
    },initialValue);
    return ans.join('');
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
console.log("Question 4--------------")
function flatten(arr){
    const initialValue = []
    var ans = arr.reduce((accumulator,cur) => {
        if(typeof cur === 'number'){
            accumulator.push(cur);
        } else{
            let sub = flatten(cur);
            accumulator = accumulator.concat(sub);
        }
        return accumulator;
    },initialValue)
    return ans;
}
const arr = [[0, 1], [2, 3,[9,0,[89,54]]], [4, 5],6];
console.log(flatten(arr));