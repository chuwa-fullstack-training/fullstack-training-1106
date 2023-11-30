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
  // Map Solution to count the previous seen numbers
  // Space Complexity: O(n)
  // Time Complexity: O(n)
  let count = 0;
  let seen = new Map();
  for (let num of nums) {
    if (seen.has(num)) {
      count += seen.get(num);
      seen.set(num, seen.get(num) + 1);
    } else {
      seen.set(num, 1);
    }
  }
  return count;
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.assert(numIdenticalPairs([1, 2, 3, 1, 1, 3]) === 4, 'Wrong Answer');
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.assert(numIdenticalPairs([1, 1, 1, 1]) === 6, 'Wrong Answer');
console.log(numIdenticalPairs([1, 2, 3])); // 0
console.assert(numIdenticalPairs([1, 2, 3]) === 0, 'Wrong Answer');
/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  // String filter Solution
  // Space Complexity: O(1)
  // Time Complexity: O(n)
  return s.split('').filter((c) => !'aeiou'.includes(c)).join('');
}
console.log(removeVowels('aeiou123123')); // "ltcdscmmntyfrcdrs"
