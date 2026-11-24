console.log("hello world!")

function changeLetter(letter) {
    tester.textContent = letter;
}

let currentSize = 15
function changeFontSize(delta) {
    currentSize = currentSize + delta;
    if(currentSize < 5) {
        currentSize = 5;
    }
    tester.style.fontSize=`${currentSize}px`;
    console.log(currentSize);
}

function changeColor(color) {
    tester.style.color = color;
}

document.getElementById("myElement").style.color = "pink";

//"rotate("+10*10+")translateX("+20+")" //so this is like string plus number plus string
//`rorate(${10*10}deg) translateX(${20-10}px)`