
const throttle = require('lodash.throttle');

const email = document.querySelector('[type="email"]');
const message = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');



 
const checkLocalStorage = () => {
const data = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(data); 
if (parsedData.email) {
    
        email.value = parsedData.email;
};
    
if (parsedData.message) {
        message.value = parsedData.message;
    } 
}


const object = {}

const fillEmail = (event) => {    
    

    object.email = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(object));

}

const fillMessage = (event) => {  
    
    
    object.message = event.currentTarget.value;
     localStorage.setItem("feedback-form-state", JSON.stringify(object));

}

const submitForm = (event) => {
    event.preventDefault();
    console.log(object);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    
}



email.addEventListener('input', throttle(fillEmail, 500));
message.addEventListener('input', throttle(fillMessage, 500));
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', checkLocalStorage);



