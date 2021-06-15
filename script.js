// filename : script.js

let numRows = 0;
let numCols = 0;
let colorSelected; 

var addRow = document.getElementsByTagName("button")[0],
    addCol = document.getElementsByTagName("button")[1],
    removeRow = document.getElementsByTagName("button")[2],
    removeCol = document.getElementsByTagName("button")[3],
    fillColorAll = document.getElementsByTagName("button")[4],
    fillColor = document.getElementsByTagName("button")[5],
    clearAllSquares = document.getElementsByTagName("button")[6];

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

var squareBox = document.getElementById("grid").innerHTML = "<td></td>";

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
    squareBox.remove();
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


