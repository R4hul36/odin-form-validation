console.log('hello world!')

const form = document.querySelector(".form")

const emailField = document.querySelector("#email")
const emailErr = document.querySelector(".email-err")

const countryField = document.querySelector("#country")
const postalCodeField = document.querySelector("#postalCode")
const postalCodeErr = document.querySelector('.postal-err')

const passwordField = document.querySelector("#password")
const passwordErr = document.querySelector(".pass-err")

const confirmPasswordField = document.querySelector("#confirmPassword")
const confirmPassErr = document.querySelector(".confirm-pass-err")


const checkPostalCode = function (e) {
    const constraints = {
        US: {
        regex: /^\d{5}(?:-\d{4})?$/,
        message: "US ZIP code must be in 99999 or 99999-9999 format."
        },
        CA: {
        regex: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\s?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/,
        message: "Canadian postal code must be in A9A 9A9 format."
        },
        UK: {
        regex: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/,
        message: "UK postcode must be in a valid format (e.g., SW1A 0AA, G2 8PA)."
        },
        AU: {
        regex: /^\d{4}$/,
        message: "Australian postal code must be a 4-digit number."
        },
    }
    const country = countryField.value
    console.log(typeof country);
    
    // console.log(constraints[country].regex);
    
    const constraint = new RegExp(constraints[country].regex)
    if(constraint.test(postalCodeField.value)){
        postalCodeErr.textContent = ""
        postalCodeErr.classList.remove('postal-err-active')
        postalCodeErr.classList.add('postal-err')
    }else {
        console.log("blabla");
        postalCodeErr.classList.remove("postal-err")
        postalFieldError(constraints[country].message)
    }
}


countryField.addEventListener("change",checkPostalCode);
postalCodeField.addEventListener("input", checkPostalCode);


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


form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    console.log("form");
    
    if(!emailField.validity.valid || !passwordField.validity.valid) {
        e.preventDefault()
        console.log("invalidd");
        emailFieldError()
        passwordFieldError()   
        postalFieldError() 
    }

})

passwordField.addEventListener("input", (e) => {
   if(passwordField.validity.valid) {
       passwordErr.textContent= ""
       passwordErr.classList.remove("password-err-active")
       passwordErr.classList.add('pass-err') 
    }else {
        console.log("invalid")
        passwordErr.classList.remove('password-err')
        passwordFieldError()
    }
})

confirmPasswordField.addEventListener("input", (e) => {
    if(e.target.value !== passwordField.value) {
        console.log("sdfsdfsdf");
        confirmPassErr.classList.remove("confirm-password-err")
        confirmPassErr.classList.add('confirm-password-err-active')
        confirmPassErr.textContent = "Password doesn't match"
    }else {
        confirmPassErr.classList.remove('confirm-password-err-active')
        confirmPassErr.textContent = ""
    }
})

const emailFieldError = function () {
    console.log("zzz");
    
    if(emailField.validity.valueMissing){
        emailErr.textContent = "Please Enter a Email address"
    }else if (emailField.validity.typeMismatch) {
        emailErr.textContent = "Please Enter a valid Email address"
    }else if (emailField.validity.tooShort) {
        emailErr.textContent = `Email must be atleast 8 characters long. You only entered ${emailField.value.length} characters`
    }
    
    emailErr.classList.add('email-err-active')
}

const passwordFieldError = function () {
    if(passwordField.validity.valueMissing){
        passwordErr.textContent = "Please Enter a password"
    }else if (passwordField.validity.typeMismatch) {
        passwordErr.textContent = "Please Enter a valid Email address"
    }else if (passwordField.validity.tooShort) {
        passwordErr.textContent = `Password must be atleast 8 characters long. You only entered ${passwordField.value.length} characters`
    }
    
    passwordErr.classList.add('password-err-active')
}

const postalFieldError = function (msg=null) {
    if(msg) {
        postalCodeErr.textContent = msg;
    }
    if(postalCodeField.validity.valueMissing) {
        postalCodeErr.textContent = "Please Enter a valid Postal Code"
    }
    postalCodeErr.classList.add("postal-err-active")
}