/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let arr = input.split('');
    let answer = true;
    let lastIncre = 0;
    let prevIncre = 0;

    let obj = {
        '(': 2,
        ')': -2,
        '{': 5,
        '}': -5,
        '[': 7,
        ']': -7
    }

    let count = arr.reduce((acc, char) => {
        if(obj[char]) {
            acc = acc + obj[char];
            lastIncre = obj[char];
        }
        
        if (acc % 2 !== 1) {
          answer = false;
        }

        if (acc < 0) {
          answer = false;
        }

        return acc;
    }, 0)

    return count === 0 && answer ; 

}

module.exports = balancedParens;
