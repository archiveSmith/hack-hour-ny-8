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
    if(str.length === 0) {
        return true;
    }

    let stack = [];

    let clean = str.replace(/[.,\/#@!$%\^&\*;:\[\]{}=\-_`~()]/g, ',').replace(/ /g,",").trim();
    for(let i=0; i<clean.length; i++) {
        if(clean[i] !== ',') {
            clean = clean.substring(i);
            break;
        }
    }

    for(let i=clean.length-1; i>=0; i--) {
        if(clean[i] !== ',') {
            clean = clean.substring(0, i+1);
            break;
        }
    }

    for(let i=0; i<clean.length; i++) {
        let result = "";
        while(clean[i] !== ',' && i < clean.length) {
            result += clean[i];
            i++;
        }
        if(stack.length > 0) {
            let reversed  = result.toLocaleLowerCase().split("").reverse().join("");;
            if(stack.length > 0 && stack[stack.length-1] === reversed) {
                stack.pop();
            } else {
                if(result !== "") {
                    stack.push(result.toLocaleLowerCase());
                }
            }
        } else {
            if(result !== "") {
                stack.push(result.toLocaleLowerCase());
            }
        }
        result = "";
    }

    if(stack.length !== 0) {
        return false;
    }
    return true;
}


module.exports = matchWord;
