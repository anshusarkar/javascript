console.log("I am a tutorial on Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
for (const key in obj) {  
        console.log(key)
}

for (const c of "Harry") {
    console.log(c)
}

let j = 0;
while (j<60000) {
    console.log(j)
    j++;
}

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);