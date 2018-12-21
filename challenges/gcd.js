/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const divisors = [];
  const highestFactor = a > b ? a : b;
  for (let i = 1; i <= Math.ceil(highestFactor / 2); i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.pop();
}

module.exports = gcd;
