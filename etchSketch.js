//Etch-a-Sketch Scripting

let mainBox=document.querySelector('.mainBox')
let clearButt = document.getElementById('clearButt')
let squareID=0
let colNum=0
let autoDrag = false
let squares = document.querySelectorAll('.square')
let darkVar = true
let eraser = false
let $ = document.querySelector.bind(document);


//Check if they're on mobile
if ("ontouchstart" in document.body) {
    autoDrag=true
    document.querySelector('body').classList.add('mobile')
    document.getElementById('inst').innerHTML = 'Tap to draw!'
}

//Grid size input
let prevGrid
let gridSize = 16
let gridButt = document.getElementById('gridButt')
gridButt.addEventListener('click', (event) => {
        newGridSize = prompt('How big you want your grid, now? (Maximum: 100)', gridSize)
        if (newGridSize > 100){newGridSize = 100}
        if (newGridSize !== null) {
            gridSize = newGridSize
            while (mainBox.firstChild){
                mainBox.removeChild(mainBox.firstChild)
            }
            makeGrid();
        }
    
})

//Clearing Button
clearButt.addEventListener('click', ()=> {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = 'rgb(244, 244, 244)'
        square.style.filter = 'brightness(1)'
    })
}) 

//Eraser Button
let eraseButt = $('#eraseButt')
eraseButt.onclick = () => {
    eraser = true
    
}
//Draw Button
let drawButt = $('#drawButt')
drawButt.onclick = () =>{
    eraser = false
}
//Darken Button
let darkButt = $('#darkButt')
darkButt.onclick = () => {
    darkVar = !darkVar
}




//Grid Creation


function makeColumn () {
    //Makes a div to put a column of squares in
    let newCol = document.createElement('div')
    newCol.classList.add('column')
    newCol.setAttribute('id', 'column'+colNum)
    mainBox.appendChild(newCol)
    
}

function makeSquare () {
    //Makes the squares and assigns them IDs
    let currCol = document.querySelector("#column"+colNum)
    let newSquare = document.createElement('div')
    newSquare.classList.add('square')
    newSquare.setAttribute('id', "square"+squareID)
    newSquare.setAttribute('data-brightness', '1')
    squareID ++
    currCol.appendChild(newSquare)
}

function makeGrid() {
    //Creates a square grid
    squareID = 0
    colNum = 0
    for (let i = 0; i<gridSize ; i++){
        makeColumn();
        for (let i = 0; i<gridSize ; i++){
            makeSquare()
        }
        colNum++
        
    }
    squareSet(document.querySelectorAll('.square'));
}
makeGrid()

//Mouseover functionality

function changeColor(square) {
    square.classList.add('moused')
}

function squareSet(squares){
    if (autoDrag === true){
        squares.forEach(
            (square) => {
                square.addEventListener("mouseover", (event) => {
                        squareChange(square)
                })
            }
        )
    }
    else {
        squares.forEach(
            (square) => {
                square.addEventListener("mouseover", (event) => {
                    if (event.shiftKey){
                        squareChange(square)
                    }
                })
            }
        )
    }
}

//Colors
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function squareChange(element) {
    if (eraser) {
        erase(element)
        return
    }
    changeColor(element)
    if (darkVar) {
        darken(element)
    }
}


function changeColor (element) {
    //Assigns each square a random color
    let color = [getRandomInt(255),getRandomInt(255),getRandomInt(255)]
    element.style.backgroundColor ='rgb('+color[0]+','+color[1]+','+color[2]+')';
}
    //This part makes it turn black over several iterations
function darken(element) {
    let style = getComputedStyle(element)
    let currBrightness = element.dataset.brightness

    if (currBrightness) {
        element.dataset.brightness -= 0.1
        element.style.filter = 'brightness('+ currBrightness  + ')'
        
    }
}

function erase (element) {
    element.style.backgroundColor = 'rgb(244, 244, 244)'
    element.style.filter = 'brightness(1)'
}

