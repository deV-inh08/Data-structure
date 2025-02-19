class MyArray {
    constructor() {
        this.length = 0; // Số lượng phần tử trong mảng
        this.data = {}; // Đối tượng lưu trữ phần tử
    }

    // Get item in Array
    get(index) {
        return this.data[index]
    }

    // Add item last Array
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    // Remove last item in Array
    pop() {
        if(this.length === 0) return undefined;
        const lastItem = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        return lastItem
    }

    // Remove item, we want
    delete(index) {
        if(this.length === 0) return undefined;
        if(index > this.length - 1) return undefined;
        const item = this.data[index]
        this._shiftItems(index)
        return item
    }

    _shiftItems(index) {
        for(let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    // find Index
    findIndex(item) {
       for(let i = 0; i < this.length; i++) {
            if(this.data[i] == item) {
                return i
            }
       }
       return -1
    }

    // find Item
    find(index) {
        for(let i = 0; i < this.length -1; i++) {
            if(index === i) {
                return this.data[index]
            }
        }
        return undefined
    }

    // Insert an element in the first position
    insertFirstElement(number) {
        for(let i = this.length; i >=0; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[0] = number
        this.length++
        return this.data
    }

    // Remove an element in the first position
    shift() {
        for(let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.pop()
        return this.data
    }


}
const array = new MyArray()
// push item
array.push(1)
array.push(2)
array.push(3) // i want to delete
array.push(4)

// array.delete(2)

console.log(array.findIndex(3)) // index: 2
console.log(array.find(0)) // item: 1

array.insertFirstElement(0)
array.insertFirstElement(-1)

array.shift()
console.log(array)


const arr = [1, 2, 3, 4]
console.log(arr.splice(0, 1))
console.log(arr)