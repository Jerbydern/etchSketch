let mainBox=document.querySelector('.mainBox')


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
