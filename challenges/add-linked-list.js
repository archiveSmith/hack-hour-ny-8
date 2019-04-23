/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(link1, link2) {
  let num1 = '';
  let num2 = '';
  let curNode;

  // Traverse over each link list
  // Add each digit to a variable
  curNode = link1;
  while (curNode !== null) {
    num1 += curNode.value;
    curNode = curNode.next;  
  }
  curNode = link2;
  while(curNode !== null) {
    num2 += curNode.value;
    curNode = curNode.next;
  }

  // Convert each number to an integer and add them
  // Convert the sum to a linked list
  let sum = Number(num1.split('').reverse().join('')) + Number(num2.split('').reverse().join(''));
  let sumArray = String(sum).split('')

  let returnNode = new Node(sumArray[sumArray.length-1]);
  curNode = returnNode;
  for (let i = sumArray.length-2; i>=0; i--) {
    curNode.next = new Node(sumArray[i]);
    curNode = curNode.next;
  }
  return returnNode;
}

const linkedList1 = new Node(1);
linkedList1.next = new Node(2);
linkedList1.next.next = new Node(3);

const linkedList2 = new Node(1);
linkedList2.next = new Node(2);
linkedList2.next.next = new Node(3);

console.log(addLinkedList(linkedList1, linkedList2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
