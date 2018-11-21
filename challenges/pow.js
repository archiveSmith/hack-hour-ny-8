/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, beencalled, multiplier) {
  if (beencalled === undefined) {
    return pow(base * base, power - 1, true, base)
  }
  if (power === 1) return base;

  return pow(base * multiplier, power - 1, true, multiplier)
}

// console.log(pow(5, 2))

module.exports = pow;
