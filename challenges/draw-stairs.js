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

function drawStairs(n, base = 0, output = []) {
  const space = ' ';
  const spaces = [];
  const asterisk = '*';
  const asterisks = [];
  let start = base;

  if (n < 0) {
    return output.slice(1).join('\n');
  }

  for (let i = 0; i < n; i += 1) {
    spaces.push(space);
  }
  for (let i = 0; i < n - (n - base); i += 1) {
    asterisks.push(asterisk);
  }

  const stair =
    spaces.join('') + asterisks.join('');
  output.push(stair);
  start += 1;

  return drawStairs(n - 1, start, output);
}

drawStairs(6);

module.exports = drawStairs;
