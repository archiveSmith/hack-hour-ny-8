/* You are given an array of integers and a target number. Write a function that returns true if
   * there is a subset of the array that sums up to the target and returns false otherwise. A subset
   * can be any size and the elements do not have to appear consecutively in the array.
   *
   * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
   * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
   * subsetSum([8, 2, 4, 12], 13) -> false
   * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
   */

function arraySum(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer, 0);
}

function subsetSum(array, target) {
  function combination(arr) {
    //checks all comvinations of arr starting with the first element
    let comboFound = false;
    (function combin(arrayLeft, arrayRight) {
      if (arrayLeft.length >= 2) {
        if (arraySum(arrayLeft) === target) {
          console.log(arrayLeft, 'sums to',  target);
          comboFound = true;
        }
      }
      for (let i = 0; i < arrayRight.length && comboFound === false; i++) {
        const left = [...arrayLeft, arrayRight[i]];
        const right = [...arrayRight.slice(i + 1, arrayRight.length)];
        combin(left, right);
      }
    })(arr.slice(0, 1), arr.slice(1, arr.length));
    return comboFound;
  }

  let allCombinations = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (combination(array.slice(i, array.length)) === true) {
      return true;
    }
  }
  return false;
  console.log(allCombinations);
}

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log(subsetSum([8, 2, 4, 12], 13));
console.log(subsetSum([8, -2, 1, -3], 6));
//module.exports = subsetSum;
