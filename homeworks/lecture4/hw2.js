// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
function double(nums) {
    return nums.map((v) => 2 * v);
}

console.log(double([1, 2, 3]));
// 2. Given an array of numbers, return an array of numbers that are even.
function getEven(nums) {
    return nums.filter((v) => v % 2 == 0);
}
console.log(getEven([1, 2, 3]));
// 3. Reverse the string: "Hello World" -> "dlroW olleH"
function reverse(str) {
    let strArray = str.split("");
    let res = [];
    res = strArray.reduce((acc, curr) => {
        acc.unshift(curr);
        return acc;
    }, res);

    return res.join("");
}
console.log(reverse("123"));
/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
function flatten(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, [])
}

console.log(flatten([1, 2, [4, 5], [[3]]]));