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

///mean === average
//mode == most common occurance
function modemean(array) {

  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++
    } else {
      obj[array[i]] = 1;
    }
  }

  let count = 0;
  let mode;
  for (let key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      mode = key;
    }

  }

  let mean = Math.floor(array.reduce((a, b) => a + b, 0) / array.length)


  if (mode == mean) {
    // return  `Equal: ${true} \n mean: ${mean} \n mode: ${mode}`
    return true;
  } else {
    // return  `Equal: ${false} \n mean: ${mean} \n mode: ${mode}`
    return false;
  }
  // return mode;
}



module.exports = modemean;