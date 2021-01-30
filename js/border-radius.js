
const modifyComponent = document.querySelector(".modify-component");
const output = document.querySelector("#output-display");
const sliderTop = document.querySelector("#slider-top");
const sliderRight = document.querySelector("#slider-right");
const sliderBottom = document.querySelector("#slider-bottom");
const sliderLeft = document.querySelector("#slider-left");
let root = document.documentElement;


let topValue = [0,0];
let rightValue = [0,0];
let bottomValue = [0,0];
let leftValue = [0,0];


function setColors(){
    const colors = [
        "#2193b0", "#6dd5ed", "#cc2b5e ", "#753a88", "#2c3e50", "#de6262", "#06beb6", "#06beb6", "#56ab2f", "#56ab2f"
    ];
    
    const color1 = Math.floor(Math.random() * colors.length);
    const color2 = Math.floor(Math.random() * colors.length);
    //console.log(colors[color1], colors[color2]);
    root.style.setProperty('--color1', colors[color1]);
    root.style.setProperty('--color2', colors[color2]);
}

function startBorderRadius(){
    topValue[0] = 100 - sliderTop.value;
    topValue[1] = 100 - topValue[0];
    rightValue[0] = 100 - sliderRight.value;
    rightValue[1] = 100 - rightValue[0];
    bottomValue[0] = 100 - sliderBottom.value;
    bottomValue[1] = 100 - bottomValue[0];
    leftValue[0] = 100 - sliderLeft.value;
    leftValue[1] = 100 - leftValue[0];
    setBorderRadius();
}


function moveTop(ev){
    topValue[0] = 100 - ev.target.value;
    topValue[1] = 100 - topValue[0];
    setBorderRadius()
}
function moveRight(ev){
    rightValue[0] = 100 - ev.target.value;
    rightValue[1] = 100 - rightValue[0];
    setBorderRadius()
}
function moveBottom(ev){
    bottomValue[0] = 100 - ev.target.value;
    bottomValue[1] = 100 - bottomValue[0];
    setBorderRadius()
}
function moveLeft(ev){
    leftValue[0] = 100 - ev.target.value;
    leftValue[1] = 100 - leftValue[0];
    setBorderRadius()
}

function setBorderRadius(){
    const result = `${topValue[1]}% ${topValue[0]}% ${bottomValue[1]}% ${bottomValue[0]}% / ${leftValue[1]}% ${rightValue[0]}% ${rightValue[1]}% ${leftValue[0]}%`;
    output.value = result;
    modifyComponent.style.borderRadius = result;
}

function copyClipboard(){
    const temp = output.value;
    output.value = `border-radius: ${output.value};`;
    output.removeAttribute("disabled");
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
    output.setAttribute("disabled", "true");
    output.value = "Values Copied!";
    setTimeout(() => {
    output.value = temp;
    }, 2000);
}

setColors();
startBorderRadius();
