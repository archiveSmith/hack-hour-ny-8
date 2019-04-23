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
 * BONUS: Do this in place
 */

 /*
 *  [0][0] to [0][n]
 * [0][1] to [n][1]
 * [0][n] to [n][n]
 * [1][0] to [0][1]
 * [1][1] to [1][1]
 * [1][n] to [n][1]
 * Loop from 0 to midpoint of n
 * for each iteration:
 *  - increase location by one point, if larger than max, reset to 0
 */

function rotateGrid(grid, n) {
    // [(0,0), (0,1), (0,2)]
    // [(1,0), (1,1), (1,2)]
    // [(2,0), (2,1), (2,2)]
    // Have row and column indices
    // 
}

module.exports = rotateGrid;
