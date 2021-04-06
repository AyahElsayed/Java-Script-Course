let arr = ["A", true , 2];
console.log(arr[0]); // A
console.log(arr[1]); // true
console.log(arr.length) // 3
console.log(arr[4]) // undefined

/*
Add, delete elements to the array
========================
 * Affects end of array
    push(value) => add
    pop() => delete

 * Affects front of array
    shift() => delete
    unshift(values) => add    
*/
arr.push(100)
console.log(arr) // [ 'A', true, 2, 100 ]
arr.push("Ayah")
console.log(arr) // [ 'A', true, 2, 100, 'Ayah' ]
arr.pop()
console.log(arr) // [ 'A', true, 2, 100 ]
arr.pop()
arr.pop()
console.log(arr) // [ 'A', true ]

arr.unshift(10,"B")
console.log(arr)  // [ 10, 'B', 'A', true ]
arr.shift()
console.log(arr)  // [ 'B', 'A', true ]

/*
* Concat => joins two arrays to make a new array
*/

let arr2 = [0, false, "R"]
let newArr = arr.concat(arr2)
console.log('new array: ', newArr) // new array:  [ 'B', 'A', true, 0, false, 'R' ]

