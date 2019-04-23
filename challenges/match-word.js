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
    
    // While character is a letter && i < string.length, push it into a current word string
    // Push current word string into word array, and reset word string
    
    let cursor = 0;
    wordArray = [];
    currentWord = "";
    // Loop through str
    while (cursor < str.length) {
        // If character is a letter
        if (isLetter(str[cursor])) {
            while (isLetter(str[cursor]) && cursor < str.length) {
                currentWord += str[cursor];
                cursor++
            }
            wordArray.push(currentWord);
            currentWord = "";
        }
        cursor++;
    }

    return wordArray;
    
    if (wordArray.length % 2 > 0) {
        return false;
    }

    let left = 0;
    let right = wordArray.length -1;
    while (left < right) {
        if (isPalindrome(wordArray[left], wordArray[right])) {
     
        }
    }

    function isPalindrome(word1, word2) {
        if (word1.length !== word2.length) return false;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[word2.length-1-i]) return false;
        }
        return true;
    }

    function isLetter(char) {
        return char.match(/[A-Z|a-z]/i);
    }
}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;



console.log(str[0])