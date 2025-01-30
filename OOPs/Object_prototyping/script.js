
// Object prototyping 

let obj = {
    a :1,
    b :"Anshu"
}

let animal = {
    eats : true
}

let lion = {
    roars : true
}

lion.__proto__= animal // sets lion.[[Prototype]] = animmal 

                       // It's like inheritance 

console.log(lion.eats);
console.log(lion.roars);

