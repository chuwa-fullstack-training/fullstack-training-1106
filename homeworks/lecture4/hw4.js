/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 */
const intersection = (nums1, nums2) => {
  // Your solution here
  var set = new Set();
  var ans = new Set();
  for(let i of nums1){
    set.add(i);
  }
  for(let i of nums2){
    if(set.has(i)) ans.add(i);
  }
  return [...ans];
};
console.log(intersection([4,5,9],[9,4,9,8,4]));
