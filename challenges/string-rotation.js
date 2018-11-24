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

  // If s2 has any characters that aren't in s1, return false
  for (let i=0; i<s2.length; i++) {
    if (!s1.includes(s2[i])) return false;
  }
  
  // Rotate strings until first characters are equal
  while (s1[0] !== s2[0]) {
    // Rotate a single character
    s2 = s2[s2.length - 1] + s2.substring(0, s2.length - 1);
  }

  // If second characters aren't the same, do one more rotation
  if (s1[1] !== s2[1]) {
    s2 = s2[s2.length - 1] + s2.substring(0, s2.length - 1);
    // While the first characters still aren't same, keep rotating
    while (s1[0] !== s2[0]) {
      // Rotate a single character
      s2 = s2[s2.length - 1] + s2.substring(0, s2.length - 1);
    }
  }

  return s1===s2;
}

// stringRotation("hello", "hello") -> true
// stringRotation("hello", "llohe") -> true
// stringRotation("hello", "he") -> false
// stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)

console.log(stringRotation("hellhoh", "hhellho"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
