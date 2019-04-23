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

let newTree = new BinaryTree(5);
newTree.left = new BinaryTree(3);
newTree.right = new BinaryTree(7);
newTree.left.left = new BinaryTree(2);
newTree.left.right = new BinaryTree(4);
newTree.right.left = new BinaryTree(6);
newTree.right.right = new BinaryTree(8)

console.log(newTree);

function validBST(tree) {
  if (tree.left > tree.value || tree.right < tree.value) return false;
  if (tree.left === null && tree.right === null) return true;
  return validBST(tree.left) && validBST(tree.right);
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
