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
  // 暴力法
  // let res = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] == nums[j]) {
  //       res++;
  //     }
  //   }
  // }
  // return res;

  let res = 0;
  const repeat = {};
  for (let num of nums) {
    if (repeat[num]) {
      res += repeat[num];
      repeat[num]++;
    }
    else {
      repeat[num] = 1;
    }
  }
  return res;

}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let new_s = "";
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let ch of s) {
    if (!vowels.includes(ch)) {
      new_s += ch;
    }
  }
  return new_s;
}

console.log(removeVowels("sonfoldakndo"));
console.log(removeVowels("leetcodeisacommunityforcoders"));