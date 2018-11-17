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
  //find mean
const avg =  array.reduce((acc,val) => acc + val) / array.length
//find mode
var mode = null;
var maxFreq = null;
for(let i = 0; i < array.length; i ++) {
  var currentNum = array[i]
  var frequency = 0;
  for(let j = i + 1; j < array.length; j++) {
    var nextNum = array[j]
    if(nextNum === currentNum) {
      frequency++;
    }
  }
  if(mode === null || frequency > maxFreq) {
    mode = currentNum;
    maxFreq = frequency;
  }

  return mode === avg
}

module.exports = modemean;
