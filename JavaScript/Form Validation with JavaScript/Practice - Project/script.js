const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.emailError");
const country = document.getElementById("country")
const countryError = document.querySelector("#country + span.countryError")

form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!country.validity.valid){
        showError();
        e.preventDefault();
    }
});

email.addEventListener("input", (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
    }
});

function showError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter email with the format x@y.z. Minmum length is 5."
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address."
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should at least be ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (country.validity.valueMissing) {
        countryError.textContent = "Please choose a country."
    }
}
