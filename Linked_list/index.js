class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

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
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    // prepend method -> add newNode in first Linkedlist
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    // printList
    printList() {
        const array = [];
        let currentNode= this.head;
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(1)
myLinkedList.append(16)

console.log(myLinkedList.printList())