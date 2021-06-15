// filename : script.js

let numRows = 0;
let numCols = 0;
let colorSelected; 

var buttons = document.getElementsByTagName("button").
    addRow = button[0],
    addCol = button[1],
    removeRow = button[2],
    removeCol = button[3],
    fillColorAll = button[4],
    fillColor = button[5],
    clearAllSquares = button[6];

// Click events
addRow.addEventListener("click", addR);
addCol.addEventListener("click", addC);
removeRow.addEventListener("click", removeR);
removeCol.addEventListener("click", removeC);
fillColorAll.addEventListener("click", fillU);
fillColor.addEventListener("click", fill);
clearAllSquares.addEventListener("click", addR);
addRow.addEventListener("click", clearAll);

const squareBox = document.createElement('td');
const grid = document.getElementById("grid");
grid.appendChild(squareBox);

//Adds a row
function addR() {
    
    numRows++;
    console.log(squareBox);
}
//Adds a column
function addC() {
    numCols++;
    console.log(squareBox);
}

//Removes a row
function removeR() {
    numRows--;
    console.log(squareBox);
}
//Remove a column
function removeC() {
    numCols--;
    squareBox.remove();
    console.log(squareBox);
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

// Display a selected
function fill(){
    squareBox.style.backgroundColor = colorSelected;
    console.log(squareBox);
}

// Remove all square boxes
function clearAll(){
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numRows; j++){
            squareBox[i][j].remove();
            console.log(squareBox[i][j]);
        }
    }
}

// File all the square boxes with the seleted color
function fillU(){
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numRows; j++){
            squareBox[i][j].style.backgroundColor = colorSelected;
            console.log(squareBox[i][j]);
        }
    }
}


