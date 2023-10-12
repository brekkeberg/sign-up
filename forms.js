// verifies passwords match
const allForms = document.querySelectorAll("input");
const formFirstName = document.querySelector("#first_name");
const formLastName = document.querySelector("#last_name");
const formEmail = document.querySelector("#email");
const formPhoneNumber = document.querySelector("#phone_number");
const formPassword = document.querySelector("#password");
const formPasswordVerification = document.querySelector("#password_verification");
const buttonSubmitForms = document.querySelector("button");

console.log(allForms);
console.log(buttonSubmitForms);

buttonSubmitForms.addEventListener('click', checkPasswords);

function checkPasswords(){
    if(formPassword.value != formPasswordVerification.value){
        alert("Your passwords do not match.")
    }
}
