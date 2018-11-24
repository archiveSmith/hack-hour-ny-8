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

function stringRotation(s1, s2) {
  
  // If lengths are unequal, return false
  if (s1.length !== s2.length) return false;
  
  // If strings are identical, return true
  if (s1 === s2) return true;

  // Rotate for the number of characters,checking each time if strings are equal
  for (let i=0; i<s2.length; i++) {
    s2 = s2[s2.length - 1] + s2.substring(0, s2.length - 1);
    if (s1 === s2) return true;
  }
  return false;

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};