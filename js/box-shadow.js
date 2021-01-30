const modifyComponent = document.querySelector(".modify-component");
const horizontalSlider = document.querySelector("#slider-horizontal");
const verticalSlider = document.querySelector("#slider-vertical");
const blurSlider = document.querySelector("#slider-blur");
const spreadSlider = document.querySelector("#slider-spread");
const opacitySlider = document.querySelector("#slider-opacity");
const outputShadow1 = document.querySelector("#output-display");



let root = document.documentElement;

let shadows = ['3px', '1px', '8px', '0px', [0,0,0,0.5]];



function moveHorizontal(ev){
    shadows[0] = `${ev.target.value}px`;
    document.querySelector("#horizontal").innerText = `Shadow Horizontal Axis (x): ${ev.target.value}px`
    setBoxShadow();
}
function moveVertical(ev){
    shadows[1] = `${ev.target.value}px`;
    document.querySelector("#vertical").innerText = `Shadow Vertical Axis (y): ${ev.target.value}px`
    setBoxShadow();
}
function moveBlur(ev){
    shadows[2] = `${ev.target.value}px`;
    document.querySelector("#blur").innerText = `Shadow Blur: ${ev.target.value}px`
    setBoxShadow();
}
function moveSpread(ev){
    shadows[3] = `${ev.target.value}px`;
    document.querySelector("#spread").innerText = `Shadow Spread: ${ev.target.value}px`
    setBoxShadow();
}
function moveColor(ev){
    const hex = ev.target.value.replace("#", '');
    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);
    let numberFromHex = [];
    for(let twoDigit of twoDigitGroup){
        numberFromHex.push(parseInt(twoDigit, 16));
    }
    shadows[4][0] = numberFromHex[0];
    shadows[4][1] = numberFromHex[1];
    shadows[4][2] = numberFromHex[2];
    setBoxShadow();

}
function moveOpacity(ev){
    shadows[4][3] = ev.target.value;
    document.querySelector("#opacity").innerText = `Shadow Opacity: ${ev.target.value}`
    setBoxShadow();
}

function setBoxShadow(){
    const rgba = `rgba(${shadows[4][0]}, ${shadows[4][1]}, ${shadows[4][2]}, ${shadows[4][3]})`;
    const result = `${shadows[0]} ${shadows[1]} ${shadows[2]} ${shadows[3]} ${rgba}`;
    outputShadow1.value = result;
    modifyComponent.style.boxShadow = result;
}

function copyClipboardMain(){
    const temp = outputShadow1.value;
    outputShadow1.value = `box-shadow: ${outputShadow1.value};`;
    outputShadow1.removeAttribute("disabled");
    outputShadow1.select();
    outputShadow1.setSelectionRange(0, 99999);
    document.execCommand("copy");
    outputShadow1.setAttribute("disabled", "true");
    outputShadow1.value = "Values Copied!";
    setTimeout(() => {
    outputShadow1.value = temp;
    }, 2000);
}


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









setColors();