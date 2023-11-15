/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */

// SOLUTION 1:
const intersection = (nums1, nums2) => {
  // Your solution here
  let arr = nums1.filter(num => nums2.indexOf(num) !== -1);
  return arr.filter((num, idx) => arr.indexOf(num) === idx);
};

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1, nums2));    // [ 2 ]

let nums3 = [4,9,5], nums4 = [9,4,9,8,4];
console.log(intersection(nums3, nums4));    // [ 4, 9 ]


// SOLUTION 2:
const intersection2 = (nums1, nums2) => {
  // Your solution here
  let setA = new Set(nums1);
  let setB = new Set(nums2);
  return [...setA].filter(num => setB.has(num));
};

let nums5 = [1,2,2,1], nums6 = [2,2];
console.log(intersection2(nums5, nums6));    // [ 2 ]

let nums7 = [4,9,5], nums8 = [9,4,9,8,4];
console.log(intersection2(nums7, nums8));    // [ 4, 9 ]