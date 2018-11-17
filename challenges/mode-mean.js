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
   let sum = 0;
   let mode = {
     tally: {},
     findMode : function () {
       let currentTally = 0;
       let arr = Object.keys(this.tally);
       return arr.reduce((acc, val) => {
         if (this.tally[val] >= currentTally){
           if (val > acc) {
             currentTally = this.tally[val];
             return val;
           } else {
             currentTally = this.tally[val];
             return val;
           }
         }
         return acc;
       }, 0)
     }
   }

   array.reduce((acc, val) => {
     if (acc[val]) {
       acc[val] += 1;
     } else {
       acc[val] = 1;
     }
     sum += val;
     return acc;
   },mode.tally);

   let theMode = mode.findMode();
   console.log(theMode, Math.floor(sum/array.length))

   return Number(theMode) === Number(Math.floor(sum / array.length));

 }

module.exports = modemean;
