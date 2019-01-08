/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  return {
    storage: {},
    max: 0,
    length: 0,
    push(e){
      if(e > this.max) this.max = e;
      this.storage[this.length] = e;
      this.length++
      return this.storage;
    },
    pop(){
      const x = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      this.max = 0;
      for(let i = 0; i <= this.length; i++){
        if(this.storage[i] > this.max){
          this.max = this.storage[i]
        }
      }
      return x
    },
    getMax(){
      return this.max;
    }
  }
}

const myStack = new Stack();


console.log(myStack.push(5))
myStack.push(4);
myStack.push(10)
console.log(myStack.getMax())
myStack.pop()
console.log(myStack.getMax())



module.exports = Stack;