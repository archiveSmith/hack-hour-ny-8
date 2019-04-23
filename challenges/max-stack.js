/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.store = {};
  this.currentMax = null;
  this.currentIndex = 0;
  this.push = (el) => {
    this.store[this.currentIndex++] = el;
  };
  this.pop = () => {
    delete this.store[this.currentIndex-1];
    this.currentIndex--;
  }
  this.getMax = () => {
    // Brute force: iterate through whole stack and get largest element
    // More efficient: 
    // Keeping track of a single max element wouldn't 
  }
}

let stack = new Stack();

stack.push('hello')
stack.pop();

console.log(stack);

module.exports = Stack;