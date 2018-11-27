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
	let queued = []
	let openers = {
	 '[': ']',
	 '{': '}',
	 '(': ')'
	};

	let closers = {
		']' : 0,
		'}': 0,
		')': 0
	}

	for(let i = 0 ; i < input.length; i++){
		if(openers[input[i]]){
			queued.push(input[i]);
		}else if(closers.hasOwnProperty(input[i])){
			 if(input[i] === openers[queued[queued.length - 1]]){
			 	queued.pop();
			}else{
				return false;
			}
		}
	}
	if(queued.length !== 0) return false
	return true
}




//console.log('x: ',balancedParens(')('))

module.exports = balancedParens;
