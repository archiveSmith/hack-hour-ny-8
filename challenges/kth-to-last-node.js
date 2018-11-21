/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *

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
  let count = k;
  let val;

  (function n(current = head) {
    if (current === null) {
      return;
    }

    n(current.next);
    count--;
    if (count === 0 && val === undefined) {
      val = current.value;
      return;
    }
  })();
  return val;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
