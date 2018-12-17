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
  let bracketsObj = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': '(',
    '}': '{',
    ']': '['
  }
  let openers = ['(','{','['];
  let closers = [')','}',']'];
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (stack.length > input.length - i) return false;
    if (stack.length === 0 && closers.includes(input[i])) return false;
    if (stack.length !== 0 && closers.includes(input[i]) && bracketsObj[stack[stack.length - 1]] === input[i]) stack.pop();
    if (openers.includes(input[i])) stack.push(input[i]);
  }
  return (stack.length === 0);

}

module.exports = balancedParens;
