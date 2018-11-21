/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// Node.prototype.add = function(value) {
//   let current = this;
//   while (current.next !== null) {
//     current = current.next;
//   }
//
//   current.next = new Node(value);
// }
//
// const myList = new Node(1);
// myList.add(2)
// myList.add(3)
// myList.add(4)
// myList.add(5)
// myList.add(6)
// myList.add(7)
// console.log(myList)


function kthToLastNode(k, head) {

  let obj = [];
  let count = 0;

  let current = head;
  while (current !== null) {
    obj.push(current.value);
    count++
    current = current.next
  }

  let index = obj.length - (k - 1)
  return obj[index]
}

// console.log('k====', kthToLastNode(3, myList))
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
