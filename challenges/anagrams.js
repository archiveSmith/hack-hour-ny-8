/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example:
 * var result = anagrams('abc');
 * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function anagrams(string, current = "", anagramArray = []) {
  // Loop through string
  // Add individual character to current permut
  // Recurse with substring, with current character missing
  //
  if (string === "") {
    anagramArray.push(current);
  }
  for (let charInd = 0; charInd < string.length; char++) {
    current += string[charInd];
    anagrams(
      string.slice(0, charInd) + string.slice(charInd + 1),
      current.slice(0),
      anagramArray
    );
  }
  return anagrams;
}

module.exports = anagrams;
