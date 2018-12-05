/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!Array.isArray(array) || array.length < 3) {
        return 0;
    }
    array.sort();
    return array[array.length-1] * array[array.length-2] * array[array.length-3] 
            > array[array.length - 1] * array[0] * array[1] 
            ? array[array.length-1] * array[array.length-2] * array[array.length-3]
            : array[array.length - 1] * array[0] * array[1] ;
}

console.log(highestProduct([9,3,6,1,2,7]));


module.exports = highestProduct;
