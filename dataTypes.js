/*
Data Types
 1- simple types
    - Number (float)
    - string   // in single quotes
    - boolean  // true or false
    - date
    - function
    - array
    - oblect

 2- special types
    - NaN   // not a number
    - null 
    - undefined  // when the variable has not any value
*/

/*
checking type
    - (typeof) oerator
        return a string of the data type primitive
    - (instanceof) oerator
        return true or false
*/

let p;
console.log('empty variable: ',p)        // undefined
console.log('typt of empty variable: ',typeof p) // undefined
console.log(p instanceof String) // false


// ================================

let a = 7;             // number
let b = '6';           // srting
let c = a + b;
console.log( c)        // 76
console.log(typeof c)  // sting

//===========================

b = parseInt(b,10)  // convert the value of b from string to number, [10] => mean base 10 (decimal n)
c = a + b;
console.log(c)         // 13 
console.log(typeof c)  // number


//==========================
// Equality Gotchas
let x = 0 == '';  // true
let x = 0 === '';  // false

/*
[''] => empty sting => 0 => false
(==) mean equal in the value
(===) mean equal in the value and data type
*/



