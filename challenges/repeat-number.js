/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  // Add each number as a key to an object, if it exists, return that number
  const numCount = {};
  for (let num of array) {
    if (numCount[num]) return num;
    else numCount[num] = true;
  }
}

module.exports = repeatNumbers;
