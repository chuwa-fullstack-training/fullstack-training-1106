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
  const obj1 = {};
  const res = [];
  for (let num of nums1) {
    obj1[num] = true;
  }
  for (let num of nums2) {
    if (obj1[num]) {
      res.push(num);
      delete obj1[num];
    }
  }
  return res;
};

// const intersection = (nums1, nums2) => {
//   return Array.from(new Set(nums1.filter(num => nums2.includes(num))));
// };

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

