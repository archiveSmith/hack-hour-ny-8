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
  //create an object. the object's keys will be the elements of the input array and the objects
  //values will be the number of occurances
  let modeStore = {};
  let mode = 0;
  let modeOccurance = 0;

  //iterate through the array, check to see if elements exist in store. if not, add with a value of 1.
  //if so, increment the key's value by 1.
  for (let i = 0; i < array.length; i++) {
    if (array[i] in modeStore) {
      modeStore[array[i]] = modeStore[array[i]]++;
    } else {
      modeStore[array[i]] = 1;
    }
  }
  console.log(modeStore);
  //initialize an object to store the mode and it's corresponding number of occurances.
  //iterate though the store to check the value of the keys. if the current key's value is greater than
  //the store, reassign that key as the new mode.
  //if the value of the key is equal to the value of the occurance, check to see which key is greater.
  for (let key in modeStore) {
    if (mode === 0) {
      mode = key;
      modeOccurance = modeStore[key];
    } else {
      if (modeStore[key] >= modeOccurance) {
        if (key > mode || modeStore[key] > modeOccurance) {
          mode = key;
          modeOccurance = modeStore[key];
        }
      }
    }
  }
  //get the Math.min of the mean of the array.
  let mean =
    array.reduce(function(acc, curr) {
      acc = acc + curr;
      return acc;
    }) / array.length;

  console.log(mean);
  console.log(mode);
  //if the mode is equal to the mean, return true, else return false.
  if (mean === mode) {
    return true;
  } else {
    return false;
  }
}
console.log(modemean([3, 4, 5, 5, 8]));
module.exports = modemean;
