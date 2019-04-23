/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree, left = 0, right = 0) {
  // increment for every right step (different variable)
  if (tree.right) {
    ++right;
    superbalanced(tree.right, left, right);
  }
  // increment for every left step (different variable)
  if (tree.left) {
    ++left;
    superbalanced(tree.left, left, right);
  }
  // compare the difference between the two (absolute value), if they're greater than 1
  if (tree.right === null && tree.left === null) {
    return;
  }
  console.log (Math.abs(left - right));
  return (Math.abs(left - right) <=1)
}

const binTree = new BinaryTree(7);
binTree.right = new BinaryTree(8);
binTree.left = new BinaryTree(6);
binTree.right.right = new BinaryTree(9);
binTree.right.left = new BinaryTree(6);
binTree.right.right.right = new BinaryTree(10);

console.log(binTree);
console.log(superbalanced(binTree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
