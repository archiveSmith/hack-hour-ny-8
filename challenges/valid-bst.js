/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function insert(val, head) {
    let current = head;
    const newNode = new BinaryTree(val);

    while(current !== null){

        if(val > current.value){
            if(current.right === null){
                current.right = newNode
                break
            }else{
                current = current.right;
            }
        }else{
            if(current.left === null){
              current.left = newNode
                break
            }else{
                current = current.left;
            }
        }
    }
}


function validBST(tree) {
    const current = tree
    if(current !== null){
        if(current.left !== null){
            if(current.left.value < current.value){
                validBST(current.left)
            }else{
                return false
            }
        }else{
            validBST(current.left)
        }
        

        if(current.right !== null){
            if(current.right.value > current.value){
                validBST(current.right);
            }else{
                return false
            }
        }else{
            validBST(current.right)
        }

    }else{
        return true
    }

}


const bst = new BinaryTree(10);
// console.log(bst)

insert(8,bst);
insert(12,bst);


// console.log(bst)

console.log(validBST(bst))

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
