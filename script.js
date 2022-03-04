const container = document.getElementById("container");
//how to create more divs?
//set wariable for how many divs i want
let countOfCells = 13*2;
//loop until [i] = how many divs you want
for (let index = 0; index <= countOfCells ; index++) {
    //with each loop add (1)new div
    gridField= document.createElement("div");
    //(2)attach class
    gridField.className = "cell";
    //(3) append to parent element
    container.appendChild(gridField);   
}

// //Event listener for mouse down and loop (for eachOf) trough query Array
document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mousemove', e => {
        item.style.background = "black";
    })
});
