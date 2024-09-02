const container = document.querySelector('#container');









    for(i = 0; i < 256; i++){
        const gridDiv = document.createElement("div");

        gridDiv.style.cssText = 'height: 37.5px; width: 37.5px;'
        container.appendChild(gridDiv);

        gridDiv.addEventListener("mouseover",() => {
            gridDiv.style.cssText = 'height: 37.5px; width: 37.5px; background-color: black;'
        })
        





       

    }


