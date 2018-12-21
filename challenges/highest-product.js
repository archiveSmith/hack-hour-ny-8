/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let maxThreePositive = [];
  let minTwoNegative = [];

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num > 0) {
      if (maxThreePositive.length < 3) {
        maxThreePositive.push(num);
      } else {
        maxThreePositive.sort((a, b) => {
          return a - b;
        });

        if (maxThreePositive[0] < num) {
          maxThreePositive[0] = num;
        }
      }
    } else {
      if (minTwoNegative.length < 2) {
        minTwoNegative.push(num);
      } else {
        minTwoNegative = minTwoNegative.sort((a, b) => {
          a + b;
        });
        if (minTwoNegative[0] > num) {
          minTwoNegative[0] = num;
        }
      }
    }
  }
  console.log(minTwoNegative, maxThreePositive);
  if (minTwoNegative.length < 2) {
    return maxThreePositive[0] * maxThreePositive[1] * maxThreePositive[2];
  } else return minTwoNegative[0] * minTwoNegative[1] * maxThreePositive[2];
}

console.log(highestProduct([10, -15, 2, 5, 12, 3]));
//module.exports = highestProduct;
