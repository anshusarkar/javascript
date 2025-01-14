let a = "Anshu"; // Strings are chracter array in a js 
                 // Strings are immutable in js

console.log(a[0],"\n",a[1])
console.log(a.length)

let real_name = 'Anshu'

let frnd_name = 'Lelouch'

console.log(`His name is ${real_name} and his friends name is ${frnd_name}`) // just like f strings in python

console.log('anshu\nsarkar')// escape sequence 

console.log(frnd_name.toLowerCase())
console.log(real_name.toUpperCase())
console.log(real_name.slice(1)) // String sliceing
console.log(frnd_name.slice(1,4))
console.log(real_name.replace("A",'0'))
console.log(real_name.concat(frnd_name, "Zero")) // String concationation which can be donw via + operator
console.log(real_name.charAt(0))
console.log(real_name.indexOf('A'))