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
    let answer = false;
    let i = 0;
    let currentLead = 0;

    function comboTotal (arr) {
        return arr.reduce((acc, val) => {return acc + val},0);
    }

    function recurse (arr, pointer, remain) {
        if (pointer > arr.length) {
          return;
        }
        
        if (arr.length === 0) {
          pointer += 1;
          remain.pop();
          arr = arr.concat(remain);
          remain = [];
          recurse(arr, pointer, remain);
          return;
        }
        if (comboTotal(arr) + array[currentLead] === target) {
          answer = true;
          return;
        }
        remain.push(arr.pop());
        console.log('calc', array[currentLead], arr, remain)
        recurse(arr, pointer, remain);
    }
   
    while (currentLead < array.length) {
        recurse(array.slice(currentLead+1), pointer = 0, remain = []);
        currentLead += 1;
    }
    
    return answer;
}


module.exports = subsetSum;
