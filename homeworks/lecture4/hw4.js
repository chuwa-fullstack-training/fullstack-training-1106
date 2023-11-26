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
  const m = new Map();
  const result = [];

  for (const num of nums1) {
    if (!m.has(num)) {
      m.set(num, 0);
    }
  }

  for (const num of nums2) {
    if (m.has(num) && m.get(num) != 1) {
      result.push(num);
      m.set(num, 1);
    }
  }

  return result;
};

function test1() {
  const nums1 = [1,2,2,1];
  const nums2 = [2,2];
  console.log(intersection(nums1, nums2));
}

function test2() {
  const nums1 = [4,9,5];
  const nums2 = [9,4,9,8,4];
  console.log(intersection(nums1, nums2));
}

test1();
test2();