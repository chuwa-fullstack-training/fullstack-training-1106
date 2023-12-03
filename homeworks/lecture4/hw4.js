/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: c
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  const nums1Set = new Set(nums1);
  const res = new Set();
  nums2.forEach(element => {
    if(nums1Set.has(element)) {
      res.add(element);
    }
  });
  return Array.from(res);
};

let nums1 = [1,2,2,1], nums2 = [2,2];
console.log(intersection(nums1, nums2));
nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));
