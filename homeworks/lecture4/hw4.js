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
// SPACE COMPLEXITY: O(n)
// TIME COMPLEXITY: O(n)
// Solution 1: Using Set
// Create a set from nums1 then check if each element in nums2 is in the set IFF it is not already in the result set
const intersection = (nums1, nums2) => {
  // Your solution here
  const set1 = new Set(nums1);
  const answer = new Set();
  for (const num of nums2) {
    if (set1.has(num) && !answer.has(num)) {
      answer.add(num);
    }
  }
  return Array.from(answer);
};
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9, 4]
