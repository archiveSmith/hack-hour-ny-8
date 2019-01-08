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

function insert(val, head){
  let current = head;

  while(current !== null){
    if(current.next === null){
      current.next = new Node(val);
      break
    }
    current = current.next
  }
}

function getValues(head){
  let current = head;
  let storage = [];

  while(current !== null){
    storage.push(current.value);
    current = current.next;
  }
  return storage
}

const list1 = new Node(1);
insert(2,list1);
insert(3,list1);

const list2 = new Node(4);
insert(5,list2);
insert(6,list2);



function addLinkedList(l1, l2) {
  const l1Vals = getValues(l1);
  const l2Vals = getValues(l2);
  const l1Num = Number(l1Vals.join(''));
  const l2Num = Number(l2Vals.join(''));

  const x = l1Num + l2Num;
  // console.log(x);

  const split = JSON.stringify(x).split('');

  const newList = new Node(split[0]);

  for(let i = 1; i < split.length; i++){
    insert(split[i],newList);
  }

  return newList
}

addLinkedList(list1,list2)

module.exports = {Node: Node, addLinkedList: addLinkedList};
