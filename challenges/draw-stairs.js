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
  for(let i = n, j = 2;i > 0;i--) {
    let spaces = new Array(i).join(' ');
    let asterisks =  new Array(j++).join('*');
    console.log(spaces + asterisks);
  }
}

module.exports = drawStairs;
