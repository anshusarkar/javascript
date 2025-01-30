let a = prompt("Enter a number : ")

let b = prompt("Enter a second number : ")

console.log(typeof(a,b));

// This would be type string by defulat 

console.log('THe sum is : ', parseInt(a) + parseInt(b));

// Now parseInt() wold be giving type Nan i.e. 'Not a number' if the user gives an input of string or a chracter

// So, we would like to raise an error for such case

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed") // check error for types of errors
}

let sum = parseInt(a) + parseInt(b)

// Error handeling 

function main(){ 
    try {
        console.log("The sum is : ", sum*x); // as x is not defined would be rasing error
        return True  
    } catch (error) { // but error would be handled in the catch block .
        console.log("Bro look it's an error !"); // And this msg would get printed . 
        return false 
    }
    finally{ // finally is mainly used in functions to make the code under return statemnet work as return ends the flow of a statement
        console.log('Files are closed and DB connection is colsed !');
    } 
}

let c = main()
