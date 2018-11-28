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

function romanNumeral(n) {
  let nString = '';

  while (n >= 1000) {
    nString += 'M';
    n -= 1000;
  }

  while (n >= 900 && n <= 999) {
    nString += 'CM';
    n -= 900;
  }

  while (n >= 500 && n <= 899) {
    nString += 'D';
    n -= 500;
  }

  while (n >= 400 && n <= 499) {
    nString += 'CD';
    n -= 400;
  }

  while (n >= 100 && n <= 399) {
    nString += 'C';
    n -= 100;
  }

  while (n >= 90 && n <= 99) {
    nString += 'XC';
    n -= 90;
  }

  while (n >= 50 && n <= 89) {
    nString += 'L';
    n -= 50;
  }

  while (n >= 40 && n <= 49) {
    nString += 'XL';
    n -= 40;
  }

  while (n >= 10 && n <= 39) {
    nString += 'X';
    n -= 10;
  }

  while (n >= 9) {
    nString += 'IX';
    n -= 9;
  }

  while (n >= 5 && n <= 8) {
    nString += 'V';
    n -= 5;
  }

  while (n >= 4) {
    nString += 'IV';
    n -= 4;
  }

  while (n >= 1 && n <= 3) {
    nString += 'I';
    n--;
  }

  return nString;
}

module.exports = romanNumeral;
