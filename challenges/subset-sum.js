/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {    
    // Jonathan Cespedes' solution
    // If target has been successfully decremented to 0, return true. Negative numbers are truthy.
    if (!target) return true;
    // If the array has no elements, return false
    if (!array.length) return false;
    // Split recursion / branched recursion. Both take away an element from the array, one decrements target
    return subsetSum(array.slice(1), target-array[0]) || subsetSum(array.slice(1), target);
}

// console.log(subsetSum([3, 0, 6, -1], 5));
// console.log([1, 2, 3, 4].reduce((total, num)=> total+num));

module.exports = subsetSum;
