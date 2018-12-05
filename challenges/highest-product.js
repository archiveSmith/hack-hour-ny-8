/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array.sort();
    return array[array.length-1] * array[array.length-2] * array[array.length-3] 
            > array[array.length - 1] * array[0] * array[1];
}


module.exports = highestProduct;
