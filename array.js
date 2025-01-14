let arr = [1, 2, 4, 5, 7, "Anshu"]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
arr.pop(1)
arr.push("Sarkar")
arr.shift()
arr.unshift("Zero")
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))



let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
[1, 222, 333, 5]

for (let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

let obj = {
    a : 1,
    b : 2,
    c : 3,
}

for (const key in obj) { // for in loop
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        console.log(key , element)
    }
}

for (const element of arr) {
    console.log(element)
}

a = [1,2,3,4,5]

let newarr = arr.map((e)=>{ 
    return e**2
})

console.log(newarr)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newarr.filter(greaterThanSeven))