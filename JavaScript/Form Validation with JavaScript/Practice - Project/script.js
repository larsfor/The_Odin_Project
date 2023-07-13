const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.emailError");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.countryError");
const zipcode = document.getElementById("zipcode");
const zipcodeError = document.querySelector("#zipcode + span.zipcodeError");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.passwordError");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const passwordConfirmationError = document.querySelector("#passwordConfirmation + span.passwordConfirmationError");

form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!country.validity.valid){
        showError();
        e.preventDefault();
    } else if (!zipcode.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!password.validity.valid) {
        showError();
        e.preventDefault();
    } else if (passwordConfirmation.value != document.getElementById("password").value) {
        showError();
        e.preventDefault();
    }
});

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
    }
});

country.addEventListener("input", (e) => {
    if (country.validity.valid) {
        countryError.textContent = "";
    }
});

zipcode.addEventListener("input", (e) => {
    if (zipcode.validity.valid) {
        zipcodeError.textContent = "";
    }
})

passwordConfirmation.addEventListener("input", (e) => {
    if (passwordConfirmation.value == document.getElementById("password").value) {
        passwordConfirmationError.textContent = "";
    }
})

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter email with the format x@y.z. Minmum length is 5."
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should at least be ${email.minLength} characters; you entered ${email.value.length}.`;
    } 
    
    else if (country.validity.valueMissing) {
        countryError.textContent = "Please choose a country."
    } 
    
    else if (zipcode.validity.valueMissing) {
        zipcodeError.textContent = "Please enter a zip code."
    } else if (zipcode.validity.tooShort) {
        zipcodeError.textContent = "Zip Code must be at least 4 digits."
    } else if (zipcode.validity.tooLong) {
        zipcodeError.textContent = "Zip Code can't be longer than 9 digits."
    } 

    else if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter a password."
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Password must at least contain one small letter, one large letter, a digit and a special character."
    } else if (password.validity.tooShort) {
        passwordError.textContent = "Password must be at least four characters long."
    }

    else if (passwordConfirmation.value !== document.getElementById("password").value) {
        passwordConfirmationError.textContent = "Password confirmation needs to be equal to the password.";
    }
}