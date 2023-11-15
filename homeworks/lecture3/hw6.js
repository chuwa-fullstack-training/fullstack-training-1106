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
  function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }

  function comb(n, r) {
    return factorial(n) / factorial(r) / factorial(n - r);
  }
  let map = new Map();
  let pairs = 0;

  map = nums.reduce((acc, curr, idx) => {
    if (!acc.has(curr)) {
      acc.set(curr, []);
    }
    acc.get(curr).push(idx);
    return acc;
  }, map);

  map.forEach((v) => {
    if (v.length >= 2) {
      pairs += comb(v.length, 2);
    }
  });

  return pairs;
}

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let res = [];
  for (let c of s) {
    switch (c) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        continue;
        break;
      default:
        res.push(c);
    }
  }

  return res.join("");
}

let nums;
nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));
nums = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums));
nums = [1, 2, 3];
console.log(numIdenticalPairs(nums));

let str;
str = "hello";
console.log(removeVowels(str));
str = "nihao";
console.log(removeVowels(str));
str = "aeiou";
console.log(removeVowels(str));