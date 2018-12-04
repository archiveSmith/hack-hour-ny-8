// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] forifroffi foriffifor
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.length === 0) return true;
  const matches = {
    end: 'dne',
    if: 'fi',
    while: 'elihw'
  };

  const passingCharacters = [
    'E',
    'N',
    'D',
    'I',
    'F',
    'W',
    'H',
    'I',
    'L',
    'e',
    'n',
    'd',
    'i',
    'f',
    'w',
    'h',
    'i',
    'l'
  ];

  let hasSpace = false;

  const cleanString = str.split('').reduce((acc, char, idx, arr) => {
    if (passingCharacters.indexOf(char) !== -1) {
      acc += char;
    }
    if (matches[acc]) {
      if (arr[idx + 1] !== matches[acc][0]) {
        hasSpace = true;
      }
    }
    return acc.toLowerCase();
  }, '');

  for (let i = 0; i < cleanString.length; i += 1) {
    if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
      return false;
    }
  }
  return hasSpace;
}

module.exports = matchWord;
