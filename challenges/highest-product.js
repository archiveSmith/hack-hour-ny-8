/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

	let sorted = array.sort()
	return sorted[sorted.length -1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]
}



module.exports = highestProduct;
