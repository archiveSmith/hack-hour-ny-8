/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for(let i = 0; i < arr.length; i++){
        let x = n - arr[i];
        let xi = array.indexOf(x);
        console.log(x)
        if(xi != -1 && xi != i) return [arr[arr.indexOf(x)],arr[i]];
    }
    return false
}


let array = [1,2,3,2,5,4,5,4,3,4,2];

console.log(twoSum(array,10))

module.exports = twoSum;
