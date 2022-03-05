const container = document.getElementById("container");


//************START of button to reset canvas************
const btn = document.createElement("button");
//add id to button
btn.id = "resetBtn";
//append text to button
btn.textContent = "Reset";
//append button to body before #conainer div
document.body.insertBefore(btn, container);
//************END of button to reset canvas************


//************START of creating canvas of multipe divs************
//set wariable for how many divs i want
let countOfCells = 1023;
//loop until [i] = how many divs you want
for (let index = 0; index <= countOfCells ; index++) {
    //with each loop add (1)new div
    gridField= document.createElement("div");
    //(2)attach class
    gridField.className = "cell";
    //(3) append to parent element
    container.appendChild(gridField);   
}
//************END of creating canvas of multipe divs************

//************START of event listeners************
// (1st event listener) - change divs color to black on mousemove
//Event listener for mouse down and loop (for eachOf) trough query Array
document.querySelectorAll('.cell').forEach(item => {
    item.addEventListener('mousemove', e => {
        item.style.background = "black";
    })
});
// (2nd event listener - reset canvas on button press)
btn.addEventListener("click", (e) => {
    document.querySelectorAll(".cell").forEach(item => {
        item.style.background = "white";
    })
})