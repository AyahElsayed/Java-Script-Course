/*
var
  - function scope
  - can be changed in scope
  - available befor declaration but its value nudefined

let
 - Block scope
 - can be changed in scope
 - only available after declaration

const 
 -Block scope
 - cant be changed
 - only available after declaration

what to use when?
 const => by default
 let => in loops

*/

let x = 7;
let y = 3;
let z = x + y;
console.log('Answer: ' , z)  // === console.log('Answer: ' + z)