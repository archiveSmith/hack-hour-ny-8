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

function drawStairs(n) {
  let starStr = "*";
  let space = " ";
  let starCount = n;
  let spaceCount = 0;

  while (spaceCount < n) {
    space = space + " ";
    spaceCount++;
  }

  while (starCount > 0) {
    console.log(space + starStr + "\n");
    starStr = starStr + "*";
    space = space.slice(0, space.length - 1);
    starCount--;
  }
}
drawStairs(3);
module.exports = drawStairs;
