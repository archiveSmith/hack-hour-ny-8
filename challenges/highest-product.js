/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 * [1,2,3,4,5]
 */

function highestProduct(array, setOfThree=[], multiples=[]) {
    // Input: array of integers (positive? negative? 0?)    
    // Highest product of any 3 integers
    // Need to compare sets of 3 numbers
    // Recursion, get sets of three
    // Store 
    // Edge Case
    
    // Base Case
    if (setOfThree.length === 3) {
        multiple = setOfThree.reduce( (acc, num) => {return acc * num}, 1 );
        multiples.push(multiple);
        return;
    }
    
    for (let i=0; i<array.length; ++i) {
        setOfThree.push(array[i]);
        array
    }

    return Math.max(multiples);
}


module.exports = highestProduct;