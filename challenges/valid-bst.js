/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  let prev = new BinaryTree(Number.NEGATIVE_INFINITY);
  let valid = true;

  (function checkValid(curr) {
    if (curr === null || !valid) {
      return;
    }
    checkValid(curr.left);
    if (prev.value > curr.value) {
      valid = false;
      return;
    }
    prev = curr;
    checkValid(curr.right);
  })(tree);

  return valid;
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
