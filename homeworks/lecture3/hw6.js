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
// compute arithmetic series sum
function computeAriSum(n) {
  return n * (n + 1) / 2;
}

function numIdenticalPairs(nums) {
  // implement here
  // space complexity: O(n), time complexity: O(n+k)
  // counter
  let dict = {};
  nums.forEach((val) => {
    (!(val in dict)) ? (dict[val] = 1) : (dict[val]++);
  });

  // compute using arithematic sum
  let numPairs = 0;
  Object.values(dict).forEach((val) => {
    numPairs += computeAriSum(val - 1);
  })

  return numPairs;
}

// test cases
console.assert(numIdenticalPairs([1, 2, 3, 1, 1, 3]) === 4, "Test 1 failed");
console.assert(numIdenticalPairs([1, 1, 1, 1]) === 6, "Test 2 failed");
console.assert(numIdenticalPairs([1, 2, 3]) === 0, "Test 3 failed");

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = s.split('').filter((val) => (!vowels.has(val))).join('');
  return result;
}

// test cases
console.assert(removeVowels('apple') === "ppl", "Test 4 failed");
console.assert(removeVowels('') === '', "Test 5 failed");
console.assert(removeVowels('aeiou') === '', "Test 6 failed");

// another solution: use regular expression
function removeVowelsRE(s) {
  return s.replace(/[aeiou]/g, '');
}
