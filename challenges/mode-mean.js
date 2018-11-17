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
    let dict = {};
    let mean = 0;
    for(let i=0; i<array.length; i++) {
        if(dict[array[i]]) {
            dict[array[i]]++;
        } else {
            dict[array[i]] = 1;
        }
        mean += array[i];
    }

    mean = Math.floor(mean/array.length);

    let mode = array[0];
    let mode_num = dict[array[0]];
    for(let key in dict) {
        if(mode_num < dict[key] || (mode_num === dict[key] && key > mode)) {
            mode = key;
            mode_num = dict[key];
        }
    }

    if(parseInt(mode) === mean) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;
