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

function kthToLastNode(k, head) {
  if(k <= 0) {
    return undefined;
  }

  let current = head;
  let counter = 0;
  while(current !== null) {
    counter++;
    current = current.next;
  }

  if(counter < k) {
    return undefined;
  }

  let kth = counter - k;
  let i = 0;
  current = head;
  while(i < kth) {
    if(!current) {
      return undefined;
    }
    current = current.next;
    i++;
  }

  return current.value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
