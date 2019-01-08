/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.size  = 0,
    this.storage = {},

    this.push = (e) => {
        this.storage[this.size] = e;
        this.size++
    }

    this.pop = () => {
        if(this.size === 0){
            return undefined;
        }

        this.size--
        const deletedItem = this.storage[this.size];
        delete this.storage[this.size];
        return deletedItem;
    }
}


/**
* Queue Class
*/


function Queue() {
    this.size = 0;
    this.storage = {};

    this.push = (e) => {
        this.storage[this.size] = e;
        this.size++;
    }

    this.unshift = () => {
        const deletedItem = this.storage[0];
        delete this.storage[0];
        this.size--;

        for(let i = 0; i < this.size; i++){
            this.storage[i] = this.storage[i + 1];
        }
    }
}

module.exports = {Stack: Stack, Queue: Queue};
