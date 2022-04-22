 
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return the index of that value, or -1 if not found.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @return {number} The index of the given num in in the given array or -1 if absent.
 */
function binarySearch(sortedNums, searchNum) {}

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = -1;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = 1;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = 0;
//             0  1  2  3  4   5   6   7   8  9   10
const nums4 = [1, 3, 5, 8, 9, 12, 16, 19, 22, 25, 27];
const searchNum3 = 9;
const expected3 = 4;

module.exports = { binarySearch };

/*****************************************************************************/