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
    // keep track of start index and end index
        
    /*
    * Example:
    *  balancedParens('[](){}'); // true
    *  balancedParens('[({})]');   // true
    *  balancedParens('[(]{)}'); // false
    */

    let inputArray = input.split('');
    let bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let openBrackets = Object.values(bracketPairs);
    let closeBrackets = Object.keys(bracketPairs);
    let openBracketsInString = [];

    // Loop through input separated into an Array
    for (let i=0; i<inputArray.length; i++) {
        let currentChar = inputArray[i];        
        // If current character is an open bracket, push it into openBracketsInString array
        if (openBrackets.includes(currentChar)) {
            openBracketsInString.push(currentChar)
        }
        // Else if current character is a close bracket, and doesn't match 
        else if (closeBrackets.includes(currentChar)) {
            if (bracketPairs[currentChar] !== openBracketsInString.pop()) {
                return false
            }
        }
    }
    return (!openBracketsInString.length);
}
    
    // if (filteredInputArray.length % 2 > 0) return false;

    // Loop through filteredInputArray
    // for (let i=0; i<filteredInputArray.length; i++) {

    // }
    // return true;
    // If value !== null
        // if ( filteredInputArray.indexOf(bracketPairs[value]) )
            // value = null && 


    // For loop forwards, checking each string from both directions to make sure they're equal
    // for (let i = 0; i < filteredInputArray.length / 2; i++) {
    //     let startBracket = filteredInputArray[i];
    //     console.log(startBracket);
    //     let endBracket = filteredInputArray[filteredInputArray.length-1-i];
    //     console.log(endBracket);
    //     if (endBracket !== bracketPairs[startBracket]) {
    //         return false;
    //     }
    // }
    // return true;

module.exports = balancedParens;

console.log(balancedParens('('));  // false
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true
 
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
