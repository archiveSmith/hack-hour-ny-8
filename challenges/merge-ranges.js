/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  // sort array by starting times
  // Iterate over array
  // If current array's ending time is greater than next array's starting time,
  // insert a new array with current array's starting time and next array's ending time

  const sortedArray = [];
  const mergedArray = [];

  for (let subArray of array) {
    sortedArray.push(Array.from(subArray));
  }

  sortedArray.sort((a, b) => a[0] - b[0]);

  console.log(sortedArray);

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let currSubArray = sortedArray[i];
    let nextSubArray = sortedArray[i + 1];
    if (currSubArray[1] >= nextSubArray[0]) {
      mergedArray.push([currSubArray[0], nextSubArray[1]]);
    }
  }
  console.log(mergedArray);
}

const array = [[2, 3], [0, 2], [4, 6]];
console.log(mergeRanges(array));

module.exports = mergeRanges;
