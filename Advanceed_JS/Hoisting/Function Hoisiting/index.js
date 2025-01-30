// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") 
// to the top of their containing scope during the compilation phase, before the code is executed. 
// However, only the declarations are hoisted, not the initializations.


greet(); // Works fine

function greet() {
  console.log("Hello, world!");
}

hello();

const hello = function(){ // hoisting dosen't work with const 
    return "Hello, world!"
}