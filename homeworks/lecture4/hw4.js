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
const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Use filter to find the common elements
    const intersection = Array.from(set1).filter(element => set2.has(element));

    return intersection;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));

const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4));

