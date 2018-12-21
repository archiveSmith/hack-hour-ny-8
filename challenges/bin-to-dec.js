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

var binaryLookUp = {
  '0': 0,
  '00': 0,
  '000': 0,
  '0000': 0,
  '1': 1,
  '01': 1,
  '001': 1,
  '0001': 1,
  '10': 2,
  '010': 2,
  '0010': 2,
  '11': 3,
  '011': 3,
  '0011': 3,
  '100': 4,
  '0100': 4,
  '101': 5,
  '0101': 5,
  '110': 6,
  '0110': 6,
  '111': 7,
  '0111': 7,
  '1000': 8,
  '1001': 9,
  '1010': 10,
  '1011': 11,
  '1100': 12,
  '1101': 13,
  '1110': 14,
  '1111': 15
};

function binToDec(binary, decimal = 0) {
  const chunks = getChunks(binary);
  console.log(chunks);
  for (let i = chunks.length - 1; i >= 0; i--) {
    // console.log(Math.pow(16, i), ' * ', binaryLookUp[chunks[i]]);
    decimal += Math.pow(16, i) * binaryLookUp[chunks[i]];
  }
  return decimal;
}

function getChunks(binary, i = binary.length - 1) {
  const chunks = [];
  let counter = 0;
  while (i >= 0) {
    i--;
    counter++;
    if (counter === 4) {
      chunks.push(binary.substring(i + 1, i + 5));
      string = '';
      counter = 0;
    }
  }

  if (counter !== 0) {
    chunks.push(binary.substring(i, i + counter + 1));
  }
  return chunks;
}]

module.exports = binToDec;
