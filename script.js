const changeButton = document.querySelector('[data-button]');
const displayText = document.querySelector('[data-display-color]');


changeButton.addEventListener('click', getRandomColor);

function getRandomColor(){
    let red = Math.round(Math.random()*10) * 255 / 10;
    let green = Math.round(Math.random()*10) * 255 / 10;
    let blue = Math.round(Math.random()*10) * 255 / 10;
    
    let bodyColor = document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    displayText.innerText = `The Color : ${bodyColor}`
}