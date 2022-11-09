//Etch-a-Sketch Scripting

let mainBox=document.querySelector('.mainBox')

//Grid Creation
squareID=0
colNum=0

function makeColumn () {
    let newCol = document.createElement('div')
    newCol.classList.add('column')
    newCol.setAttribute('id', 'column'+colNum)
    mainBox.appendChild(newCol)
    
}

function makeSquare () {
    let currCol = document.querySelector("#column"+colNum)
    let newSquare = document.createElement('div')
    newSquare.classList.add('square')
    newSquare.setAttribute('id', "square"+squareID)
    squareID ++
    currCol.appendChild(newSquare)
}
makeColumn();
for (let i = 0; i<16 ; i++){
    for (let i = 0; i<16 ; i++){
        makeSquare()
    }
    colNum++
    makeColumn();
}

//Mouseover functionality
let autoDrag = true
let magicSquare = document.getElementById('square95')

magicSquare.addEventListener("mouseover", () => magicSquare.classList.add('moused'))


let squares = document.querySelectorAll('.square')

function changeColor(square) {
    square.classList.add('moused')
}

if (autoDrag === true){
    squares.forEach(
        (square) => {
            square.addEventListener("mouseover", (event) => {
                
                    square.classList.add('moused')
               
            
        })
        }
    )
}
else {
    squares.forEach(
        (square) => {
            square.addEventListener("mouseover", (event) => {
                if (event.shiftKey){
                    square.classList.add('moused')
                }
               
            
        })
        }
    )
}

