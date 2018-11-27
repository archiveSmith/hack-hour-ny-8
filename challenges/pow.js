/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, beencalled, multiplier) {

  if (beencalled === undefined && power < 0) {
    return 1 / pow(base * base, Math.abs(power) - 1, true, base)
  }
  if (beencalled === undefined) {
    return pow(base * base, power - 1, true, base)
  }
  if (power === 1) return base;



  return pow(base * multiplier, power - 1, true, multiplier)
}

console.log(pow(5, 3))



module.exports = pow;