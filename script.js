let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyCode = document.querySelector("#selectable")
let rgb1 = "#160093";
let rgb2 = "#12ebd9";

const haxValues = () => {
    let myHexaValues = "0123456789abcdef";
    let newHex="#";
    for(let i=1;i<=6;i++){
        newHex+=myHexaValues[Math.floor(Math.random()*16)];
    }
    return newHex;
};

const handlebutton1 = () => {
    rgb1 = haxValues();
    btn1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1},${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
};

const handlebutton2 = () => {
    rgb2 = haxValues();
    btn2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
};

btn1.addEventListener("click",handlebutton1);
btn2.addEventListener("click",handlebutton2);

copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText);
    alert("Copied the text: " + copyCode.innerText);
});