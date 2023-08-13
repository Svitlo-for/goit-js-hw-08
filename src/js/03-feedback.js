import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");

let emailValue = ' ';
let messageValue = ' ';

const data = {
    email: emailValue,
    message: messageValue,
}

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (savedData) {
    form.elements.email.value = savedData.email;
    data.message.email.value = savedData.message;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
    emailValue = form.elements.email.value;
    messageValue = form.message.email.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

form.addEventListener('submit', onSubmit);

function onSubmit() {
    localStorage.removeItem("feedback-form-state");
    reset(form);
    console.log(data);
}

window.addEventListener('load', onLoad);

function onLoad() {
    localStorage.getItem(data)
}
