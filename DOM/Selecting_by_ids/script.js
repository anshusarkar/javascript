console.log("Anshu")

let box = document.getElementsByClassName("box")

console.log(box)

box[1].style.backgroundColor = "green"

// insted of above we ca use document ids

document.getElementById("redbox").style.backgroundColor = "red"

// also querry selector can be used to do the same

document.querySelector(".box").style.backgroundColor = 'orange' // would be working with 1st selector

console.log(document.querySelectorAll(".box")) // Would be returing a HTML collection which is like an array

document.querySelectorAll(".box").forEach(e =>{ // for each is like a for loop using var e we are iterating through the HTML collection and changing it's color values
    e.style.backgroundColor = "green";
}) 

