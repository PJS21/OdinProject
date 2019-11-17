

function createSquare() {

    const square = document.createElement('div');
    square.classList.add('gridSquare');
    console.log(square);
    return square;

}

function createRow(columns) {
    
    let row = document.createElement('div');
    row.classList.add('gridRow');
    

    let i;

    let rowSquare;
    for (i=0;i<columns;i++){
        rowSquare = row.appendChild(createSquare());
        rowSquare.classList.add('Column' + i);

    }

    return row;

}



function createGrid(rows, columns) {
    
    const mainDiv = document.getElementById('mainDiv');
    
    let i;
    for (i=0;i<rows;i++) {

        mainDiv.appendChild(createRow(columns));

        
    }

}




createGrid(16,16);