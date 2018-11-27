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

let stack = [];

function balancedParens(input){
    let openBrackets = ['(', '[', '{'];
    let closeBrackets = [')', ']', '}'];

    for(let i=0; i<input.length; i++) {
        let tmp = openBrackets.indexOf(input[i]);
        if(tmp !== -1) {
            stack.push(tmp);
        } else {
            let closeTmp = closeBrackets.indexOf(input[i]);
            if(closeTmp !== -1) {
                if(stack.pop() !== closeTmp) {
                    return false;
                }
            }
        }
    }
    if(stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
