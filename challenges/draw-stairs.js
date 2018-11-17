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
    let space = n - 1;
    let star = 1;

    for(let i = 1; i <= n; i++) {
      let str = "";
      str += " ".repeat(space);
      str += "*".repeat(star);
      space -= 1;
      star += 1;
      console.log(str);
    }
}


module.exports = drawStairs;
