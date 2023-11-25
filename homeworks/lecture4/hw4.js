/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
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
function intersection(nums1, nums2) {
  // Use sets to store unique elements
  var set1 = new Set(nums1);
  var set2 = new Set(nums2);

  // Use the spread operator to convert the set to an array
  // and filter elements present in both sets
  var result = Array.from(set1).filter(function(num) {
    return set2.has(num);
  });

  return result;
}

// Example 1
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];
var result1 = intersection(nums1, nums2);
console.log(result1); // Output: [2]

// Example 2
var nums3 = [4, 9, 5];
var nums4 = [9, 4, 9, 8, 4];
var result2 = intersection(nums3, nums4);
console.log(result2); // Output: [9, 4]
