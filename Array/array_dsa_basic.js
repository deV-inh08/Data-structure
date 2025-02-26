// sum & Average
const sum_average = (arr) => {
    let average = 0;
    let total = 0;
    for(let i = 0; i< arr.length; i++) {
        total = total + arr[i]
    }
    average = total / arr.length
    return {
        total,
        average
    }
}

console.log(sum_average([10, 20, 30, 40]))

// find number
const findNumber = (arr) => {
    let minNumber = arr[0]
    let maxNumber = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minNumber) {
            minNumber = arr[i]
        }
    }

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
    }

    return {
        minNumber,
        maxNumber
    }
}

console.log(findNumber([8, 2, 6, 1, 9]))


// count number
const count_number = (arr, n) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            count++
        }
    }
    return count
}

console.log(count_number([1, 2, 3, 2, 4, 2], 2))
console.log(count_number([1, 2, 3, 4, 1], 2))


// delete number
// const delete_number = (arr, n) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === n) {
//            for(let j = i; j < arr.length; j++) {
//             arr[j] = arr[j + 1]
//            }
//            arr.length--
//            break
//         }
//     }
//     return arr
// }

const delete_number = (arr, n) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
       if(arr[i] !== n) {
        newArr.push(arr[i])
       }
    }
    return newArr
}

console.log(delete_number([5, 3, 7, 9], 3))


// insert element in Array
const insert_array = (arr, number, position) => {
    let temp;
    for(let i = 0; i < arr.length; i++) {
        if(i === position) {
            temp = arr[i]
            arr[i] = number
            for(let j = position + 1; j < arr.length; j++) {
                let current = arr[j]
                arr[j] = temp
                temp = current
            }
            arr[arr.length] = temp
        }
   }
   return arr
}

console.log(insert_array([1, 2, 3, 5, 6, 7], 10, 3))