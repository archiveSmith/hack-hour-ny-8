/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(size) {
    for (let level = 1; level <= size; level++) {
        let output = "";
        let stars = size-level;
        for (let blanks = 0; blanks < stars; blanks++) {
            output += " ";
        }
        for (stars; stars < size; stars++) {
            output += "*";
        }
        console.log(output);
    }
};

module.exports = drawStairs;