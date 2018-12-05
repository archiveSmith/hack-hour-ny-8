/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

	if(array.length < 3) return 0

	let sorted = array.sort((a,b) => {
		return a - b
	})

	let arr = [sorted[0],sorted[1],sorted[sorted.length - 3], sorted[sorted.length - 2], sorted[sorted.length - 1]];
	console.log(sorted);
	let product = 0;

	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			for(let x = 0; x < arr.length; x++){
				if(arr[i] * arr[j] * arr[x] > product){
					product = arr[i] * arr[j] * arr[x]
				}
			}
		}
	}

	return product
}


console.log(highestProduct([2,3,2,3,5,4,3,5,8,9,6,-2,-5,-8,-4,-2]))


module.exports = highestProduct;
