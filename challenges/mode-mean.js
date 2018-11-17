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
  if (array.length === 0) return "array must be populated";
    let counterObj = {};
    let sum = 0;
    let mode = array[0];
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    if (counterObj[array[i]] === undefined) {
      counterObj[array[i]] = 1;
    } else {
      counterObj[array[i]]++;
    }
  }
  for (var k in counterObj) {
    if (counterObj[k] > counterObj[mode]) {
      mode = k;
    } else if (counterObj[k] === counterObj[mode] && k > mode) {
      mode = k;
    }
  }
  let avg = Math.floor(sum / array.length);
  return avg === Number(mode);
}

module.exports = modemean;
