function bubbleSort(arr, target) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    arr.some((number, index) => {
        if(number === target) {
            result.push(index)
        }
    })
    return result
}

// Test
console.log(bubbleSort([5, 2, 9, 1, 7, 2, 6], 2));


