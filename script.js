
// added border color for button
const buttonElement = document.getElementsByTagName('button');
for(button of buttonElement){
    button.style.border = '2px solid black';
}

const blackButtonElement = document.getElementsByClassName('blackButton');
for (button of blackButtonElement) {
    button.style.border = '2px solid white';
}
// changing color on click
