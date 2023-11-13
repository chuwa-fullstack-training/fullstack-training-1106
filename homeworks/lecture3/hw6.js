/**
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 *
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]  Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5)
 *
 * Example 2:
 * Input: nums = [1,1,1,1]  Output: 6
 * Explanation: Each pair in the array are good.
 *
 * Example 3:
 * Input: nums = [1,2,3]    Output: 0
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 */
function numIdenticalPairs(nums) {
  // implement here
  const counters = [];
  for (let num of nums) {
    counters[num] === undefined ? counters[num] = 1 : counters[num]++;
  }
  var pairs = 0;
  for (let counter of counters) {
    if (counter >= 2) pairs += (counter * (counter - 1)) / 2;
  }
  return pairs;
}

// test
let nums1 = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums1));
let nums2 = [1,1,1,1];
console.log(numIdenticalPairs(nums2));
let nums3 = [1,2,3];
console.log(numIdenticalPairs(nums3));

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let mySet = new Set(['a', 'e', 'i', 'o', 'u']);
  let letterArr = s.split('');
  let newLetterArr = letterArr.filter(c => !mySet.has(c));
  return newLetterArr.join('');
}

// test
console.log(removeVowels("chuwa leetcode"));    // "chw ltcd"