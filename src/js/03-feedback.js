import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};

fromLocalStorage();
const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener("submit", onSubmit);
refs.form.addEventListener("input", throttle(onInput, 500));

function onInput() {
    const formData = {
        email: refs.input.value,
        message: refs.textarea.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const storageData = localStorage.getItem(STORAGE_KEY);

function onSubmit(event) {
    event.preventDefault();
  
    if (storageData) {
    const parseData = JSON.parse(storageData);
    console.log(parseData);
    };
    localStorage.removeItem(STORAGE_KEY);
    refs.form.reset();
};

function fromLocalStorage() {
    const defaultValue = JSON.parse(storageData);
    if (!defaultValue) {
        return;
    };
    refs.input.value = defaultValue.email || "";
    refs.textarea.value = defaultValue.message || "";
};

////////////////////////////////////////////////////////
// const form = document.querySelector(".feedback-form");

// let emailValue = ' ';
// let messageValue = ' ';

// const data = {
//     email: emailValue,
//     message: messageValue,
// }

// const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
// if (savedData) {
//     form.elements.email.value = savedData.email;
//     data.message.email.value = savedData.message;
// }

// form.addEventListener('input', throttle(onInput, 500));

// function onInput() {
//     emailValue = form.elements.email.value;
//     messageValue = form.message.email.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(data));
// }

// form.addEventListener('submit', onSubmit);

// function onSubmit() {
//     localStorage.removeItem("feedback-form-state");
//     reset(form);
//     console.log(data);
// }


