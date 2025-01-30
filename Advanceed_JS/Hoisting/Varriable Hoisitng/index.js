// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") 
// to the top of their containing scope during the compilation phase, before the code is executed. 
// However, only the declarations are hoisted, not the initializations.


console.log(a); // undefined
var a = 10;
console.log(a); // 10

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // Same error with const 



