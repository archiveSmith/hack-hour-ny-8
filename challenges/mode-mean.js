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
  const map = new Map();
  let total = 0;
  for (item of array) {
    total += item;
    count = map.get(item) || 0;
    map.set(item, count + 1);
  }
  const mean = Math.floor(total / array.length);
  let max = Number.NEGATIVE_INFINITY;
  let modes = [];
  for (let [key, value] of map) {
    if (value === max) {
      modes.push(key);
    } else if (value > max) {
      max = value;
      mode = [];
      modes.push(key);
    }
  }
  return mean === modes.sort()[modes.length - 1];
}

module.exports = modemean;
