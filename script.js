const container = document.querySelector('#container');








function createGrid(){
    for(i = 0; i <= 256; i++){
       
        const squareDiv = document.createElement("div");
        container.appendChild(squareDiv);
        squareDiv.style.height = '35px';
        squareDiv.style.width = '35px';
        squareDiv.style.borderStyle = 'solid';
        squareDiv.style.borderColor = 'red';
        squareDiv.style.flex = '1';

    }

}

createGrid();

