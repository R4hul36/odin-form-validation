console.log('hello world!')

const emailField = document.querySelector("#email")
const emailErr = document.querySelector(".email-err")

const countryField = document.querySelector("#country")
const postalCodeField = document.querySelector("#postalCode")
const passwordField = document.querySelector("#password")
const passwordErr = document.querySelector(".pass-err")
const confirmPasswordField = document.querySelector("#confirmPassword")
const confirmPassErr = document.querySelector(".confirm-pass-err")


const checkPostalCode = function () {
    const contraints = {
        US: {
        regex: /^\d{5}(?:-\d{4})?$/,
        message: "US ZIP code must be in 99999 or 99999-9999 format."
        },
        CA: {
        regex: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\s?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/,
        message: "Canadian postal code must be in A9A 9A9 format."
        },
        UK: {
        regex: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
        message: "UK postcode must be in a valid format (e.g., SW1A 0AA, G2 8PA)."
        },
        AU: {
        regex: /^\d{4}$/,
        message: "Australian postal code must be a 4-digit number."
        },
    }
}

emailField.addEventListener("input", (e)=> {
    if(emailField.validity.valid) {
       emailErr.textContent= ""
       emailErr.classList.remove("email-err-active")
       emailErr.classList.add('email-err') 
    }else {
        console.log("invalid")
        emailErr.classList.remove('email-err')
        emailFieldError()
    }
    
})

const emailFieldError = function () {
    if(emailField.validity.valueMissing){
        emailErr.textContent = "Please Enter a Email address"
    }else if (emailField.validity.typeMismatch) {
        emailErr.textContent = "Please Enter a valid Email address"
    }else if (emailField.validity.tooShort) {
        emailErr.textContent = `Email must be atleast 8 characters long. You only entered ${emailField.value.length} characters`
    }
    
    emailErr.classList.add('email-err-active')
}