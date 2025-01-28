let button = document.getElementById('btn')

//https://developer.mozilla.org/en-US/docs/Web/Events
// Events

button.addEventListener('click', () =>{
    alert("I was clicked")
})

button.addEventListener('dblclick', () =>{ // event for double click
    document.querySelector('.box').innerHTML = "<b> yayy it got changed ! </b>"
})

document.addEventListener("keydown", (e)=>{ // Would be listing all keybord keys strokes with ID's
    console.log(e, e.key, e.keyCode)
})