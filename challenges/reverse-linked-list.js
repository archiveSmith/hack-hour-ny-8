/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while(current!== null){
           next = current.next;
           current.nex = prev;
           prev = current;
           current = next;
        }
        head = prev;

}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
