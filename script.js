
const container = document.querySelector("#container");
const changeBtn = document.querySelector("#change-btn")

function newGrid(squaresPerSide){
    const squareSize = 960 /squaresPerSide;
    
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++){
        const newDiv = document.createElement("div");
        newDiv.className = 'newDiv';

        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;

        newDiv.addEventListener("mouseover", ()=>{
            
            const red = Math.floor(Math.random()* 256);
            const green= Math.floor(Math.random()* 256);
            const blue = Math.floor(Math.random()* 256);

            newDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
        container.appendChild(newDiv);
    }
    }

    newGrid(16);

    changeBtn.addEventListener("click", ()=>{
        let userinput = prompt("Input size of the square (max 100):");
        let squarePerSide = parseInt(userinput);

        if(isNaN(squarePerSide) || squarePerSide <= 0){
            alert("Input the right number please!");
            return;
        }

        if (squarePerSide > 100){
            alert("Max is 100!");
            return;
        }

        container.innerHTML = '';
        newGrid(squarePerSide);
    });