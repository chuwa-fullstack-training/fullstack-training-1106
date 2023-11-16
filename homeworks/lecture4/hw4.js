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
  let set1 = new Set();
  let result = new Set();

  for (let num of nums1) {
    set1.add(num);
  }

  for (let num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }
  return [...result];
};

let nums1 = [1,2,2,1];
let nums2 = [2,2];

console.log('For num1 and num2 arrays, the intersection is: ' + console.log(intersection(nums1, nums2)));

let nums3 = [4,9,5];
let nums4 = [9,4,9,8,4];

console.log('For num3 and num4 arrays, the intersection is: ' + console.log(intersection(nums3, nums4)));
