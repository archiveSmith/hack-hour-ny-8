/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(array, callback, permutation = [], permutations = []) {
  if (array.length === 0) {
    permutations.push(permutation);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    permutation.push(array[i]);
    // console.log(array.slice(0, i).concat(array.slice(i + 1)));
    eachPermutation(
      array.slice(0, i).concat(array.slice(i + 1)),
      callback,
      permutation,
      permutations
    );
  }
  for (let array of permutations) {
    callback(array);
  }
}

const testArray = [0, 1, 2, 3, 4];
console.log(testArray.slice(testArray.length - 1));

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm);
});

module.exports = eachPermutation;
