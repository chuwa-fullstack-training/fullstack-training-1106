// ONLY use map, filter, reduce to solve the following problems:

// 1. Given an array of numbers, return an array of numbers that are doubled.
const doubleNumbers = arr => {
  return arr.map(value => 2 * value)
}
console.log(doubleNumbers([1,2,3,4,5]));


// 2. Given an array of numbers, return an array of numbers that are even.
const findEvenNumbers = arr => {
  return arr.filter(value => value % 2 === 0)
}
console.log(findEvenNumbers([0,1,2,3,4,5]));


// 3. Reverse the string: "Hello World" -> "dlroW olleH"
const reverse = s => {
  const reverseArray = s.split('').reduce((acc, val) => {
    return [val, ...acc]
  }, []);
  return reverseArray.join('');
};
console.log(reverse("Hello World") === "dlroW olleH");


/**
 * 4. Flatten the array of arrays to a single array:
 * Example 1:
 * const arr = [[0, 1], [2, 3], [4, 5]];
 * Expected output: [0, 1, 2, 3, 4, 5]
 * Example 2:
 * const arr = [[0, 1], [2, 3], [4, [5, 6]]];
 * Expected output: [0, 1, 2, 3, 4, 5, 6]
 */
const flatten = arr => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, [])
};
console.log(flatten([[0, 1], [2, 3], [4, 5]]));
console.log(flatten([[0, 1], [2, 3], [4, [5, 6]]]));
