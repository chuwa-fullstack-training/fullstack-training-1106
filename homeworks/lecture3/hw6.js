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
  // let numsArr = Array.from(nums);
  let map = {};
  let output = 0;
  for(let i in nums){
    if(map[nums[i]] === undefined){
      map[nums[i]] = [i];
    }
    else{
      map[nums[i]].push(i);
    }
  }
  console.log('map:',map);
  for(let i in map){
    output += map[i].length *  (map[i].length -1) /2;
  }
  return output;
}
/////////////// test cases  //////////////////////////
console.log('output: ',numIdenticalPairs([1,2,3,1,1,3]));
console.log('output: ',numIdenticalPairs([1,1,1,1]));
console.log('output: ',numIdenticalPairs([1,2,3]));


/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let chars = s.split('');
  let newChars = chars.filter(char=>{
    return !vowels.includes(char.toLowerCase());
  });
  let newString = newChars.join('');
  return newString;
}
///////////////// test cases  //////////////////////////
console.log('original String: ',"Hello World");
console.log('new String: ',removeVowels("Hello World"));