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
  //traverse to find num of nodes
  let curr = head;
  let count = 0;
  while(curr !== null) {
    curr = curr.next;
    count ++;
  }
  //traverse again to get to the nth to the last;
  let curr2 = head;
  let count2 = 0;
  while(count2 !== count - k) {
    curr2 = curr2.next;
    count2 ++;
  }

  return curr2.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
