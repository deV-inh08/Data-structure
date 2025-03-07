class LinkedList {
    constructor(value) {
       this.head = {
            value: value,
            next: null
       }
       this.tail= this.head;
       this.length = 1
    }

    // method append
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
console.log(myLinkedList)