/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  const productArray = [];
  let zeroCount = 0;
  // get multiple of all numbers
  let totalProduct = array.reduce((product, number) => {
    // if 0 in array, ignore and push into zeroes array
    if (number === 0) ++zeroCount;
    else product *= number;
    return product;
  }, 1);
  // With more than one 0, the answer will always be 0, or zero plus remaining multiple
  if (zeroCount > 1 ) return [0];
  else if (zeroCount === 1) return [totalProduct, 0];
  // With a single zero, the answer will be the multiple of the remaning nums
  else {
    array.forEach(number => {
      productArray.push(totalProduct / number);
    });
  }
  return productArray;
}

module.exports = getAllProducts;
