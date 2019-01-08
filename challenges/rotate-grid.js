/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 * 
 * if character is on the top row
 *      increment the second bracket
 * 
 * if character is on the end of a row (array[i][n - 1])
 *      increement i
 *
 * if character is in the middle (array[Math.floor(n / 2)][Math.floor(n / 2)])
 *      leave it alone
 * 
 * if character is on the bottom row
 *      decrement the second bracket
 * 
 * if character is on the
 * 
 *
 * BONUS: Do this in place
 */


  const testGrid = [  [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]  ]



function rotateGrid(grid, n) {

  for(let i = 0; i < 2; i++){

    if(i === 0){
     for(let j = 0; j < grid.length; j++){
        grid[j].reverse();
     }
   
  }

    return grid;


}
}
console.log(rotateGrid(testGrid,3))

module.exports = rotateGrid
