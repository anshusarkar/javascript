console.log("Hello, World!") // Becomes visble in console of a browser to view click on inspect and then click on consloe tab

// vars are globally scoped

var a = 5

a += 1

var b = 6 
var c = "Zero"
console.log(a+b)

console.log(typeof(c))
console.log(typeof(b))

// var a can be incrimented

const alpha = 4

console.log(alpha)

// alpha += 1 can't happen as it's a const just like a static varraible in java

console.log(alpha)


// let are globally scoped unlike var which are globally scoped 
let value = 5 

{
    let value = 55
    console.log(value)
}

console.log(value)

// Data types

let x = "Anshu"; // String
let y = 22; // int
let z = 3.55; // float
const p = true; // boolean
let q = undefined; // undefined
let r = null; // object

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// objects

let o = { // uses key value pairs like hash maps or dictioneries
    "name": "Anshu",
    "job code": 5600,
    "is_handsome": true
}

console.log(o.name); // here we use . operator to invoke values in an object of a key unlike python dicts where we use []
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);