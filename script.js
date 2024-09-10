// Select html elements
const container = document.querySelector('#container');
const body = document.querySelector('body');
const resizeBtn = document.querySelector("#gridBtn");


// add an event lister to button
resizeBtn.addEventListener("click",newGrid);





//create gird
    for(i = 0; i < 256; i++){
        const gridDiv = document.createElement("div");
        gridDiv.id = 'grid';

        gridDiv.style.cssText = 'height: 37.5px; width: 37.5px;'
        container.appendChild(gridDiv);

        gridDiv.addEventListener("mouseover",() => {
            gridDiv.style.cssText = 'height: 37.5px; width: 37.5px; background-color: black;'
        })
    }


   
// create new grid from user
    function newGrid(){
        
        
       
        //remove element that was previously there (grid)
        container.innerHTML = '';
        //get user choice and make sure they only enter between 16 and 100
        let userChoice;
        let promptUser = prompt('Enter a value between 16 and 100 to resize the grid!');

        if (promptUser < 16){
            alert('Please enter a correct value!')
        }
        else if(promptUser > 100){
            alert('Please enter a correct value!')
        }
        else{
            userChoice = promptUser;
        }
        
        let newGridDim = userChoice * userChoice;
        
        let newDivDim = 600 / userChoice;
        // convert to string so we can use it for css 
        String(newDivDim);

        for(i = 0; i < newGridDim; i++){

            
            const gridDiv = document.createElement("div");
        
    
            gridDiv.style.cssText = 'height: ' + newDivDim + 'px; width: ' + newDivDim + 'px;';            container.appendChild(gridDiv);
            container.appendChild(gridDiv);
            gridDiv.addEventListener("mouseover",() => {
                gridDiv.style.cssText = 'height: ' + newDivDim + 'px; width: ' + newDivDim + 'px; background-color: black';
            })
        
    }
        
    




       

    }


