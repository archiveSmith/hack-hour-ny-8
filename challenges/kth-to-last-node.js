const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let nextNode = head;
  let lastNodeFindStart = head;
  let lastValue;
  let count = {};
  while (nextNode) {
    lastValue = nextNode.value;
    nextNode = nextNode.next;
  }

  let currentNode;
  let nthNode;
  while (lastNodeFindStart) {
    // lastNodeFindStart
    currentNode = lastNodeFindStart;
    count[lastNodeFindStart.value] = 1;
    while (currentNode) {
      count[lastNodeFindStart.value] += 1;
      currentNode = currentNode.next;
    }

    if (count[lastNodeFindStart.value] - 1 === k) {
      nthNode = count[lastNodeFindStart.value];
    }
    lastNodeFindStart = lastNodeFindStart.next;
  }

  return Object.keys(count).reduce((acc, currentNode) => {
    if (count[currentNode] === nthNode) {
      acc = currentNode;
    }
    return acc;
  });
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
