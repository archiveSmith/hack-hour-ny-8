/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let x;

    if( a > b){
        x = a;
    }else{
        x = b
    };

    let divisor = 0

    for(let i = 0; i <= x; i++){
        if(a % i === 0 && b % i === 0){
            // if(i > divisor) divisor = i
            divisor = i;
        }
    }

    return divisor
}

console.log(gcd(1100,1100))

module.exports = gcd;