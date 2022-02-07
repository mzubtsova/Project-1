
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

const button = document.querySelectorAll("button");
const buttonArray = Array.from(button);
buttonArray[0].addEventListener("click", function () {
    // console.log(‘i click’);
    buttonArray[0].style.background = "red";
})



const formElement = document.getElementById('contactForm');
formElement.addEventListener('submit', function(event){
    event.preventDefault();

    const nameInput = document.getElementById('text');
    const emailInput = document.getElementById('email');
    const userFeedback = document.getElementById('feedback');

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userFeedback = userFeedback.value;

    if (userName === ""){
        alert ("Please includ your name!");
    }else if(userEmail === ""){
        alert('Please include your email!');
    } else if (userFeedback === "") {
        alert('Please leave us a message. We appreciate your opinion!');
}else {
    alert('Thank you for message! We will connect you shortly!');
    nameInput.value = '';
    emailInput.value = '';
    userFeedback.value = '';
}
})

// Button
// const btn_01 = document.getElementById('btn_01'); // btn_01 element
// const toggle_01 = document.querySelector('.toggle_01'); // p tag element
// btn_01.addEventListener("click", () => toggleButton(toggle_01));



