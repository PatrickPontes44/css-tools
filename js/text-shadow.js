const modifyComponent = document.querySelector("#main-text");
const horizontalSlider = document.querySelector("#slider-horizontal");
const verticalSlider = document.querySelector("#slider-vertical");
const blurSlider = document.querySelector("#slider-blur");
const opacitySlider = document.querySelector("#slider-opacity");
const output = document.querySelector("#output-display");



let shadows = ['0px', '0px', '1px', [0,0,0,1]];



function moveHorizontal(ev){
    shadows[0] = `${ev.target.value}px`;
    document.querySelector("#horizontal").innerText = `Text Shadow Horizontal Axis (x): ${ev.target.value}px`
    setTextShadow();
}
function moveVertical(ev){
    shadows[1] = `${ev.target.value}px`;
    document.querySelector("#vertical").innerText = `Text Shadow Vertical Axis (y): ${ev.target.value}px`
    setTextShadow();
}
function moveBlur(ev){
    shadows[2] = `${ev.target.value}px`;
    document.querySelector("#blur").innerText = `Text Shadow Blur: ${ev.target.value}px`
    setTextShadow();
}

function moveColor(ev){
    const hex = ev.target.value.replace("#", '');
    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);
    let numberFromHex = [];
    for(let twoDigit of twoDigitGroup){
        numberFromHex.push(parseInt(twoDigit, 16));
    }
    shadows[3][0] = numberFromHex[0];
    shadows[3][1] = numberFromHex[1];
    shadows[3][2] = numberFromHex[2];
    setTextShadow();

}
function moveOpacity(ev){
    shadows[3][3] = ev.target.value;
    document.querySelector("#opacity").innerText = `Text Shadow Opacity: ${ev.target.value}`
    setTextShadow();
}

function setTextShadow(){
    const rgba = `rgba(${shadows[3][0]}, ${shadows[3][1]}, ${shadows[3][2]}, ${shadows[3][3]})`;
    const result = `${shadows[0]} ${shadows[1]} ${shadows[2]} ${rgba}`;
    output.value = result;
    modifyComponent.style.textShadow = result;
}

function copyClipboard(){
    const temp = output.value;
    output.value = `text-shadow: ${output.value};`;
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

