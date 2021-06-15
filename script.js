let numRows = 0;
let numCols = 0;
let colorSelected; 

var addRow = document.getElementsByTagName("botton")[0],
    addCol = document.getElementsByTagName("botton")[1],
    removeRow = document.getElementsByTagName("botton")[2],
    removeCol = document.getElementsByTagName("botton")[3],
    fillColorAll = document.getElementsByTagName("botton")[4],
    fillColor = document.getElementsByTagName("botton")[5],
    clearAllSquares = document.getElementsByTagName("botton")[6];

    // addR = document.querySelectorAll("button.addR()"),
    // addC = document.querySelectorAll("botton.addC"),
    // removeR = document.querySelectorAll("botton.removeC"),
    // fillU = document.querySelectorAll("botton.fillU()"),
    // fill = document.querySelectorAll("botton.fill()"),
    // clearAll = document.querySelectorAll("botton.clearAll()"), 
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillColorAll.addEventListener("click", fillU);
fillColor.addEventListener("click", fill);
clearAllSquares.addEventListener("click", addR);
addRow.addEventListener("click", clearAll);

var squareBox = document.querySelector('td');

//Adds a row
function addR() {
    console.log(squareBox);
}
//Adds a column
function addC() {
    console.log(squareBox);
}

//Removes a row
function removeR() {
    squareBox.remove();

}
//Remove a column
function removeC() {
    squareBox.remove();
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    if(colorSelected === "red")
        squareBox.style.backgroundColor = "red";
    else if(colorSelected === "Blue")
        squareBox.style.backgroundColor = "Blude";
    else if(colorSelected === "green")
        squareBox.style.backgroundColor = "green";
    else if(colorSelected === "Yellow")
        squareBox.style.backgroundColor = "Yellow";

    console.log(squareBox);
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
while(true){
    addR.addEventListener('click', addR);

}


