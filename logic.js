

const selectDiv = document.getElementById("myRange");
document.getElementById("size-value").innerHTML = selectDiv.value; //show value at laod.
const container = document.getElementById("container");
const slideContainer = document.getElementById("myRange");
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const colorMode = document.getElementById("colorMode");
const rainbow = document.getElementById("rainbow");
let favColor = document.getElementById("favcolor");

let currentColor = '#333333';
let eraseFlag = 0;
let  color = 0;
let rainbowFlag = 0;




selectDiv.addEventListener("click", addNew);
slideContainer.addEventListener("mouseup", reloadGrid);
reset.addEventListener("click",reloadGrid);
eraser.addEventListener("click",eraserFlag);
colorMode.addEventListener("click",colorFlag);
favColor.addEventListener("input", setCurrentColor);
rainbow.addEventListener("click", setRainbowFlag);



function addNew(e){
    eraseFlag = 0;
    color = 0;
    rainbowFlag = 0;
    document.getElementById("size-value").innerHTML = selectDiv.value; //show current value of the divs
    container.style.gridTemplateColumns = `repeat(${selectDiv.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${selectDiv.value}, 1fr)`;

    for(let i = 0; i < selectDiv.value * selectDiv.value; i++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("divShadow");
            newDiv.addEventListener("mouseover", mouseOver);
            container.appendChild(newDiv);
     }   
    
}

function mouseOver(e){
    if(eraseFlag === 1){
        e.target.style.backgroundColor = "floralwhite";
        favColor.value = "#fffaf0";
    }
    else if(eraseFlag === 0){
        
        if(color === 1){
            e.target.style.backgroundColor = currentColor;
        }
        else if(rainbowFlag === 1){
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
        else e.target.style.backgroundColor = "black";
    }
   
}

function eraserFlag(e){
    eraseFlag = 1;
    mouseOver();
}

function colorFlag(e){
    color = 1;
    eraseFlag = 0;
    rainbowFlag = 0;
    mouseOver();
}
function setRainbowFlag(e){
    rainbowFlag = 1;
    color = 0;
    mouseOver();
}

function setCurrentColor(e){
    currentColor = e.target.value;
}
function reloadGrid(e){
    
    container.innerHTML = '';
    favColor.value = "#333333";
    
}


