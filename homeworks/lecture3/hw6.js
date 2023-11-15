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
  let count = 0;
  for(let i = 0; i< nums.length-1; i++){
    for(let j = i+1; j<nums.length; j++){
      if(nums[i] === nums[j]){
        count += 1;
      }
    }
  }
  return count;
}

// test cases:
const nums1 = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums1))

const nums2 = [1,1,1,1]
console.log(numIdenticalPairs(nums2))

const nums3 = []
console.log(numIdenticalPairs(nums3))


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  const newS = s.replace(/a|e|i|o|u/g, '')
  return newS
}

// test cases
console.log(removeVowels('adedaaaidodu')) // Output: dddd


function removeVowels2(s) {
  const newS = s.replace(/[aeiou]/g, '')
  return newS
}

// test cases
console.log(removeVowels2('adedaaaaaidodu')) // Output: dddd
