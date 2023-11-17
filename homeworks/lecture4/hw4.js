const isEqual = require('lodash/isEqual');

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
const intersection = (nums1, nums2) => {
  // Your solution here
  let set1 = new Set(nums1);
  let resultSet = new Set();
  nums2.forEach((val) => {
    (set1.has(val)) && (resultSet.add(val));
  });
  return Array.from(resultSet.keys());
};


// test cases
console.assert(isEqual(new Set(intersection([1,2,2,1], [2,2])), new Set([2])), "Test 1 failed");
console.assert(isEqual(new Set(intersection([4,9,5], [9,4,9,8,4])), new Set([9, 4])), "Test 2 failed");