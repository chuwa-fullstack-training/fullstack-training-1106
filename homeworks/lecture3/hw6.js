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
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result.push([i, j]);
      }
    }
  }
  return result.length;
}

console.log("When nums is [1,2,3,1,1,3], the result is " + numIdenticalPairs([1,2,3,1,1,3]));
console.log("When nums is [1,1,1,1], the result is " + numIdenticalPairs([1,1,1,1]));
console.log("When nums is [1,2,3], the result is " + numIdenticalPairs([1,2,3]));


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  var result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') {
      result += s[i];
    }
  }

  return result;
}

console.log('When string is vowels, the result is ' + removeVowels('vowels'));
console.log('When string is strings, the result is ' + removeVowels('strings'));
console.log('When string is closure, the result is ' + removeVowels('closure'));

