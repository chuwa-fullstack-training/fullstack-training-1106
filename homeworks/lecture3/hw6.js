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
  const freqMap = new Map();
  let res = 0;
  for (let num of nums){
    if (freqMap.has(num)){
      freqMap.set(num, freqMap.get(num) + 1);
    }
    else{
      freqMap.set(num, 1);
    }
  }
  freqMap.forEach((value,key) => {
    res += (value - 1) * value / 2
  })
  return res
}
console.log(numIdenticalPairs([1,2,3,1,1,3]));
/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  let res = ""; // Initialize an empty string to store the result
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); // Set of vowels (including uppercase)

  for (let ch of s) {
      // Check if the character is not a vowel
      if (!vowels.has(ch)) {
          res += ch; // Append it to the result string
      }
  }

  return res;
}
