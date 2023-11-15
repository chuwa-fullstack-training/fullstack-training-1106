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
  var map = new Map();
  var ans = 0;
  for(let e of nums){
    if(map.has(e)){
      ans += map.get(e);
      map.set(e,map.get(e)+1);
    }else{
      map.set(e,1);
    }
  }
  return ans;
}
console.log(numIdenticalPairs([1,2,3]));

/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */
function removeVowels(s) {
  // implement here
  var obj = {'a':1,'e':1,'i':1,'o':1,'u':1};
  var res = []
  for(let c of s){
    if(!(c in obj)){
      res.push(c);
    }
  }
  return res.join('');
}
var s = "rtrtioioplk";
var ans = removeVowels(s);
console.log(ans);
console.log(s);
