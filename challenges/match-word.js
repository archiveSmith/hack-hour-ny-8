// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let opening = [];
	let index
	let endIndex
	let buildStr = '';

	for(let i = 0 ; i < str.length; i++){

		if(str[i].match(/[a-z]/i)){
			buildStr += str[i].toLowerCase();
			if(str[i+1] === undefined && buildStr.length > 0){
				if(buildStr.split('').reverse().join('') === opening[opening.length - 1]){
					opening.pop()
				}else{
					opening.push(buildStr);
				}
			}
		}

		if(!str[i].match(/[a-z]/i)){
			if(buildStr.length > 0){
				if(buildStr.split('').reverse().join('') === opening[opening.length - 1]){
					opening.pop()
				}else{
					opening.push(buildStr);
				}
			}
			buildStr = ''
		}
	}

	if(opening.length > 0) return false
	return true
}


module.exports = matchWord;
