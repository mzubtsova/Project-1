
// added border color for button
const buttonElement = document.getElementsByTagName('button');
for(let button of buttonElement){
    button.style.border = '2px solid black';
}
console.log("Hello!");

const blackButtonElement = document.getElementsByClassName('blackButton');
for (let button of blackButtonElement) {
    button.style.border = '2px solid white';
}
// changing color on click
// ----------------------------------
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((individualButton) => {
    console.log(individualButton);
    individualButton.addEventListener('click', () => {
        individualButton.classList.toggle('red');
        console.log(individualButton.classList);
    })
});


const formElement = document.querySelector('form');
console.log(formElement);
formElement.addEventListener('submit', function(event){
    event.preventDefault();

    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const userFeedback = document.getElementById('feedback');

    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userMessage = userFeedback.value;

    if (userName === ""){
        alert ("Please include your name!");
    }else if(userEmail === ""){
        alert('Please include your email!');
    } else if (userMessage === "") {
        alert('Please leave us a message. We appreciate your opinion!');
}else {
    alert('Thank you for your message! We will connect you shortly!');
    nameInput.value = '';
    emailInput.value = '';
    userFeedback.value = '';
}
})
// form for blog page

const blogFormElement = document.querySelector('form');
console.log(blogFormElement);
blogFormElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const blogNameInput = document.getElementById('userName');
    const blogEmailInput = document.getElementById('userEmail');
    const blogUserFeedback = document.getElementById('feedback');

    const userName = blogNameInput.value;
    const userEmail = blogEmailInput.value;
    const userMessage = blogUserFeedback.value;

    if (userName === "") {
        alert("Please include your name!");
    } else if (userEmail === "") {
        alert('Please include your email!');
    } else if (userMessage === "") {
        alert('Please leave us a message. We appreciate your opinion!');
    } else {
        alert('Thank you for your message! We will connect you shortly!');
        blogNameInput.value = '';
        blogEmailInput.value = '';
        blogUserFeedback.value = '';
    }
})

// alarm for About page
// let aboutPageAlarm = document.getElementsByClassName('aboutPage')
// alert("Hello! Page currently isn't working");










