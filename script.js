const container = document.getElementById("container");
const gridField= document.createElement("div");
gridField.className = "cell";
container.appendChild(gridField);

//function to change color of cell
function changeColor () {
    gridField.style.background = "black";
}

//Event listener for mouse down
gridField.addEventListener('mousedown', changeColor);


//how to create more divs?
//set wariable for how many divs i want
//loop until [i] = how many divs you want
//with each loop add (1)new div and (2)attach class, 
//(3) append to parent element.