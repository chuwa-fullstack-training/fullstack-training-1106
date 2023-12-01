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
  let result = [...nums1, ...nums2];
  result = new Set(result);
  result = Array.from(result);
  result = result.filter(num => {
    return nums1.includes(num) && nums2.includes(num);
  })
  return result;
};
let nums1 = [1,2,2,1];
let nums2 = [2,2];
console.log("result",intersection(nums1,nums2));

nums1 = [4,9,5];
nums2 = [9,4,9,8,4];
console.log("result",intersection(nums1,nums2));
