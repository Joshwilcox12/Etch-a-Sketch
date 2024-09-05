const container = document.querySelector('#container');
const body = document.querySelector('body');
const resizeBtn = document.querySelector("#gridBtn");



resizeBtn.addEventListener("click",newGrid);






    for(i = 0; i < 256; i++){
        const gridDiv = document.createElement("div");

        gridDiv.style.cssText = 'height: 37.5px; width: 37.5px;'
        container.appendChild(gridDiv);

        gridDiv.addEventListener("mouseover",() => {
            gridDiv.style.cssText = 'height: 37.5px; width: 37.5px; background-color: black;'
        })
    }

    function newGrid(){

        body.removeChild(container);
        const newContainer = document.createElement("div");
        newContainer.id ='newContainer';
        body.appendChild(newContainer);
        
        let promptUser = prompt('Enter a value between 16 and 100 to resize the grid!');
        console.log(promptUser);
        let newGridDim = promptUser * promptUser;
        console.log(newGridDim)
        let newDivDim = 600 / promptUser;
        console.log(newDivDim)
        String(newDivDim);

        for(i = 0; i < newGridDim; i++){

            
            const gridDiv = document.createElement("div");
        
    
            gridDiv.style.cssText = 'height: ' + newDivDim + 'px; width: ' + newDivDim + 'px;';            container.appendChild(gridDiv);
            newContainer.appendChild(gridDiv);
            gridDiv.addEventListener("mouseover",() => {
                gridDiv.style.cssText = 'height: ' + newDivDim + 'px; width: ' + newDivDim + 'px; background-color: black';
            })
        
    }
        
    




       

    }


