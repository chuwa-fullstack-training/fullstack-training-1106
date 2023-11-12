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
  const record = new Array(101).fill(0);
  var result = 0;
  for (const n of nums) {
    result += record[n]++;
  }
  return result;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));
console.log("===========================");

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  var result = "";
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (ch of s) {
    result += vowels.includes(ch) ? '' : ch;
  }

  // const vowels = /[aeiou]/gi;
  // const result = s.replace(vowels, '');

  return result;
}

console.log(removeVowels("string"));
console.log(removeVowels("console"));
