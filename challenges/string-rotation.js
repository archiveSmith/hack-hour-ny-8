/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}



function stringRotation(s1, s2, arr = [], count = 0) {
  if (s2 === s1) return true
  if (count === s1.length) return false
  let lastLetter = s1.substring(s1.length - 1);
  let choppedWord = s1.substring(0, s1.length - 1)

  let rotation = lastLetter + choppedWord;
  arr.push(rotation);
  count++
  return stringRotation(rotation, s2, arr, count)
}

// console.log(stringRotation('hello', 'ollhe'))

module.exports = {
  isSubstring: isSubstring,
  stringRotation: stringRotation
};
