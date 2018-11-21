/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power < 0) {
        base = parseFloat(1 / base);
        power *= -1;
    }
    if (power === 0) return 1;
    else return base * pow(base, power-1);
}

// Haven't accounted for negative powers (FIXED)
// 5^-1 = 1 / 5 = 0.2
// 5^-2 = 1/5 * 1/5 = 0.4

module.exports = pow;