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
  // find Math.Max of the mode of the array
  const valueCount = array.reduce((accumulator, currentVal) => {
    if (accumulator[currentVal]) {
      accumulator[currentVal] += 1;
    } else {
      accumulator[currentVal] = 1;
    }

    return accumulator;
  }, {}); //?

  const valueMostRepeated = Object.keys(valueCount)
    .reduce((mostRepeatedVal, currentVal, index, arr) => {
      if (
        Array.isArray(mostRepeatedVal) &&
        valueCount[mostRepeatedVal[0]] < valueCount[currentVal]
      ) {
        mostRepeatedVal = currentVal;
      } else {
        if (arr[mostRepeatedVal] < currentVal) {
          mostRepeatedVal = currentVal;
        } else if (arr[mostRepeatedVal] === currentVal) {
          mostRepeatedVal = [mostRepeatedVal, currentVal];
        }
      }

      return mostRepeatedVal;
    })
    .map(currentVal => Number(currentVal));

  const mode = Math.max(...valueMostRepeated); //?

  // find the Math.floor of the mean of the array
  const mean = Math.floor(
    array.reduce((accumulator, currentVal) => accumulator + currentVal) / array.length
  ); //?

  return mode === mean;
}

modemean([1, 2, 3, 3, 4, 4, 5, 6]); //?
modemean([1, 2, 2, 3]); //?

module.exports = modemean;
