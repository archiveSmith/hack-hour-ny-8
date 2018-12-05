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
let reverseB = binary.split('').reverse();
let num = 0;
for(let i = 1,j = 1; i <= reverseB.length; i++, j*=2){
	if(reverseB[i-1] === '1'){
		num += j
	}
}
return num;
}

console.log(binToDec('1000'))

module.exports = binToDec;
