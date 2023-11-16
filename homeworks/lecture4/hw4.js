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
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const map = new Map();
  let result = [];
  for (let num of set1) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  for (let num of set2) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  map.forEach((v, k) => {
    if (v >= 2) {
      result.push(k);
    }
  });
  return result;
};
let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersection(nums1, nums2));
nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
