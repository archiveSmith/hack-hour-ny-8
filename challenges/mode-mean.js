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


function modemean(array){
  const cache = { 
    mode: { value: -Infinity, length: 1 },
    mean: { value: -Infinity, sum: 0 }
  };
  for (let i = 0; i < array.length; i += 1) {
    const { mode, mean } = cache;
    const value = array[i];
    mean.sum += value;
    mean.value = Math.floor(mean.sum / (i + 1));
    if (value in cache) {
      cache[value].push(i);
      if (cache[value].length > mode.length || 
          cache[value].length === mode.length 
          && value >= mode.value){
        mode.value = value;
        mode.length = cache[value].length;
      }
    } else {
      cache[value] = [i];
      if (value > mode.value && mode.length === 1) {
        mode.value = value;
      }
    }
  }
  return cache.mode.value === cache.mean.value;
}


module.exports = modemean;
