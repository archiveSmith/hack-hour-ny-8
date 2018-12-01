/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    let r=0;
    for(let i=0; i<binary.length; i++) {
        if(r === 0) {
            r = r | parseInt(binary[i]);
        } else {
            r = r << 1;
            r = r | parseInt(binary[i]);
        }
    }
    return r;
}

// console.log(binToDec('0101'));

module.exports = binToDec;
