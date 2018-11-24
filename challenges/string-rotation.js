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

function stringRotation(s1, s2, times = s1.length) {
  if (times === 0) {return false}
  let newStr = s2.slice(1);
  newStr += s2[0];
  if (s1 === newStr) {
    return true;
  } else {
    return stringRotation(s1, newStr, times - 1 );
  }
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
