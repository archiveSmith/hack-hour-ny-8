/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

const baseNumerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

function romanNumeral(n) {
  const numArr = n.toString().split(''); // ?
  const ones = Number(numArr[numArr.length - 1]); // ?
  const tens = Number(numArr[numArr.length - 2]); // ?
  const hundreds = Number(numArr[numArr.length - 3]); // ?
  const thousands = Number(numArr[numArr.length - 4]); // ?
  const romanNum = [];

  // check the thousands
  if (thousands) {
    romanNum.push(baseNumerals[`${thousands}000`]);
  }
  // check the hundreds
  if (hundreds) {
    romanNum.push(baseNumerals[`${hundreds}00`]);
  }
  // check the tens place
  if (tens) {
    romanNum.push(baseNumerals[`${tens}0`]);
  }
  // check the ones place
  if (ones === 1) {
    romanNum.push(baseNumerals[1]);
  } else if (ones === 5) {
    romanNum.push(baseNumerals[5]);
  } else if (ones === 4) {
    romanNum.push(baseNumerals[4]);
  } else if (ones === 9) {
    romanNum.push(baseNumerals[9]);
  } else if (ones < 4) {
    for (let i = 0; i < ones; i += 1) {
      romanNum.push(baseNumerals[1]);
    }
  } else if (ones > 5) {
    romanNum.push(baseNumerals[5]);
    for (let i = 0; i < ones % 5; i += 1) {
      romanNum.push(baseNumerals[1]);
    }
  }

  return romanNum.join('');
}

module.exports = romanNumeral;
