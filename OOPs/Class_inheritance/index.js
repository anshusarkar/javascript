class Animal {
    constructor(name){
        this.name = name ;
        console.log("Object is created ...."); // just like any other constructors of a lang it would run as the invocation of any class
    }
    eats() {
        console.log("Eating ..");
    }
    jumps(){
        console.log("Jumping ..");
    }
}

class lion extends Animal{
    constructor(name){
    super(name);
    this.name = name ;
    console.log("Object is created ...."); 
    }

    eats() {
        super.eats()
        console.log("Eating .. like a pro");
    }
}

let a = new Animal("Bunny");

let l = new lion("Kira");

console.log(a);
console.log(l);

console.log(l instanceof lion); // true
console.log(a instanceof Animal); // true
console.log(a instanceof lion); // flase



