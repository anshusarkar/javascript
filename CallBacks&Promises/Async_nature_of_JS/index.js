console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => { // This would be ingnred because of the async nature of js
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => { // This would be ingnred because of the async nature of js
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End") // after the script reaches it's end the Timeout functions would run following the time passed in ms in this case it's 0ms for both the fucntions !