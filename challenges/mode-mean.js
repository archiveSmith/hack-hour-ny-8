/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
    // Find mean
    const mean = array.reduce((acc, number, index) => {
      return index === array.length - 1
        ? Math.floor((acc + number) / array.length)
        : acc + number;
    }, 0);
  
    // Find mode
    const occurences = {};
    let mode = array[0];
    let modeCount = 1;
    for (let num of array) {
      occurences[num] ? occurences[num]++ : (occurences[num] = 1);
      if (occurences[num] > modeCount || (occurences[num] == modeCount && num > mode)) {
        mode = num;
        modeCount = occurences[num];
      }
    }
  
    return mean === mode;
  }
  
  function modemean(array) {
    // Find sum of all numbers (to calculate mean)
    let sum = 0;
    // Keep track of occurences of numbers in array (to find mode)
    const occurrences = {};
    let mode = array[0];
    let modeCount = 1;
  
    // On each iteration...
    for (let i = 0; i < array.length; i++) {
      const currentNum = array[i];
  
      // ...add current number to sum
      sum += currentNum;
  
      // ...update occurences object based on if current num was seen before
      occurrences[currentNum]
        ? occurrences[currentNum]++
        : (occurrences[currentNum] = 1);
  
      // ... if current number occurs more time than current mode
      // ... or if current number occurs the same number of times, but is greater than current mode
      // ... update both the mode and the modeCount
      if (
        occurrences[currentNum] > modeCount ||
        (occurrences[currentNum] === modeCount && currentNum > mode)
      ) {
        mode = currentNum;
        modeCount = occurrences[currentNum];
      }
    }
  
    const mean = Math.floor(sum / array.length);
    return mode === mean;
  }
  
  console.log(modemean([2, 2, 2, 2])); // expect to be true
  console.log(modemean([-20, -20, -20, -20])); // expect to be true
  console.log(modemean([2, 2, 2, 2])); // expect to be true
  console.log(modemean([1, 6, 7, 5, 8, 0, 10, 6, 6, 11])); //  expect to be true
  console.log(modemean([12, 5, 32])); // expect to be false
  
  module.exports = modemean;
  