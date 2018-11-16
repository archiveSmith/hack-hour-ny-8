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
    if(n > 100 || n < 1) {
        throw new Exception ("The number is either too big or too small");
    }
    
    let result = "";

    for(let i=0; i<n; i++) {
        let j = 0;
        let pr = "";
        for(; j<n-i-1; j++) {
            pr += " ";
        }
        for(let k=j; k<n; k++) {
            pr += "*";
        }
        pr += "\n";
        result += pr;
    }
    
    console.log(result);
}

// drawStairs(6);
// drawStairs(3);
// console.log("\n\n\n");
// drawStairs(8);
// console.log("\n\n\n");
// drawStairs(1);



module.exports = drawStairs;
