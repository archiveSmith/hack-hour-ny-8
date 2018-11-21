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
  //traverse through the link list. use a counter to get a count of nodes.
  let counter = 1;
  let currNode = head;

  while (currNode.next !== null) {
    counter++;
    currNode = currNode.next;
  }
  //subtract k from length the get the length from head.
  let fromFront = counter - k;
  //traverse through while counter decrements. return node.
  currNode = head;
  while (fromFront > 0) {
    currNode = currNode.next;
    fromFront--;
  }
  return currNode.value;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
