/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
    // FIND MEAN
    let mean = array.reduce((total, current, ind, arr) => {
        // If at last element, total should be averaged before return
        if (ind === arr.length-1) total = (total+current) / arr.length;
        else total += current;
        return total;
    }, 0)
    // FIND MODE
    // Loop through array
    // Store the occurences of each element in an object
    // Save the highest occuring instance
    // Add modes to modearray, find max before comparing to mean
    let modeArr = [];
    let modeOccurences;
    let totalOccurences = {};
    array.forEach((el, ind, arr) => {
        if (!totalOccurences[el]) totalOccurences[el] = 1;
        else totalOccurences[el]++;
    })
    // Reduce values in total occurences to the greatest number of occurences
    modeOccurences = Object.values(totalOccurences).reduce( (max, num) => {
        if (num > max) {
            return num;
        }
        return max;
    }, 0)
    // Loop over keys, pushing modes to modeArray
    for (let num in totalOccurences) {
        if (totalOccurences[num] === modeOccurences) {
            modeArr.push(num);
        }
    }
    // RETURN mean rounded down === max element in mode array
    return Math.floor(mean) === Math.max(...modeArr);
}

module.exports = modemean;

console.log(modemean([3, 4, 5, 5, 8]));

console.log(Math.max(...[5,4,6]));