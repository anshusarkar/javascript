console.log("Hello, world !")
document.body
let cont = document.body.childNodes[1]

cont.lastElementChild.style.color = "red" ; // using js to modify css properties
cont.lastElementChild.style.backgroundColor = "green"

document.body.firstElementChild
document.body.firstElementChild.children[0] // 0th element
document.body.firstElementChild.children[1] // first children
document.body.firstElementChild.children[1].previousElementSibling // 0th element