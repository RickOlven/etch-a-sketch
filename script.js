
const container = document.querySelector("#container");
    for (let i = 0; i < 256; i++){
        const newDiv = document.createElement("div");
        newDiv.className = 'newDiv';

        newDiv.style.width = '60px';
        newDiv.style.height = '60px';

        newDiv.addEventListener("mouseover", ()=>{
            newDiv.style.backgroundColor = 'black';
        })
        container.appendChild(newDiv);
    }