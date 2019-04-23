/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      49    ->    XLIX
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

/*
Codex:
I = 1
IV = num/4===1
V = 5
IX = num/9===1
X = 10
XL = 40
L = 50
XC = 90
C = 100
CD = num/400 === 1
D = 500
CM = num/900 === 1
M = 1000

*/

function romanNumeral(n) {
    let num = n;
    let romanNum = ""
    // Compare for the number of each single letter roman numeral
        // if number is 9 or 4 add on IX or IV
        // if division is greater than 0
        // subract from number until subtraction would be less than 0
    if (num / 1000 > 0) {
        while (num - 1000 > 0) {
            romanNum += "M";
            num -= 1000;
        }
        // while num - 1000 > 0
        // Add M to romanNum
        // num -= 1000
    }
    if (num / 500 > 0) {
        // while num - 500 > 0
        // Add D to romanNum
        // num -= 500
        while (num - 500 > 0) {
            romanNum += "D";
            num -= 500;
        }
    }
    if (num / 100 > 0) {
        // while num - 100 > 0
        // Add C to romanNum
        // num -= 100
        while (num - 100 > 0) {
            romanNum += "C";
            num -= 100;
        }
    }
    if (num / 50 > 0) {
        // while num - 50 > 0
        // Add L to romanNum
        // num -= 50
        while (num - 50 > 0) {
            romanNum += "L";
            num -= 50;
        }
    }
    if (num / 10 > 0) {
        // while num - 10 > 0
        // Add X to romanNum
        // num -= 10
        while (num - 10 > 0) {
            romanNum += "X";
            num -= 10;
        }
    }
    if (num / 5 > 0) {
        // while num - 5 > 0
        // Add V to romanNum
        // num -= 5
        while (num - 5 > 0) {
            romanNum += "V";
            num -= 5;
        }
    }
    if (num / 1 > 0) {
        // while num - 10 > 0
        // Add X to romanNum
        // num -= 1
        while (num - 1 > 0) {
            romanNum += "I";
            num -= 1;
        }
    }
}

module.exports = romanNumeral;
