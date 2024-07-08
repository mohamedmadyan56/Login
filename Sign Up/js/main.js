let signUpForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let nameAlert = document.getElementById("nameAlert");
let signEmail = document.getElementById("signEmail");
let EmailAlert = document.getElementById("EmailAlert");
let signPassword = document.getElementById("signPassword");
let PassAlert = document.getElementById("PassAlert");
let allUsers = [];
var EmailExistAlert = document.getElementById("EmailExistAlert");
var suceessAlert = document.getElementById("suceessAlert");

if (localStorage.getItem('allUsers') != null) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkIfAllInputAreTrue()) {
        addUser();
    }
});

function addUser() {
    var newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    };
    if (isAlreadyExist(newUser)) {
        console.log("already exist");
        EmailExistAlert.classList.replace('d-none', 'd-block');
    } else {
        EmailExistAlert.classList.replace('d-block', 'd-none');
        suceessAlert.classList.replace('d-none', 'd-block');
        allUsers.push(newUser);
        console.log(allUsers);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        window.location.href = "../../Login//index.html";
    }
}

function isAlreadyExist(newUser) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log('email is already exist');
            return true;
        }
    }
    return false;
}

function validateInput(regex, element, alertEl) {
    var pattern = regex;
    if (pattern.test(element.value)) {
        element.classList.remove('is-invalid');
        element.classList.add('valid');
        return true;
    } else {
        element.classList.add('is-invalid');
        return false;
    }
}

function checkIfAllInputAreTrue() {
    if (validateInput(/^[a-zA-Z][a-zA-Z0-9]{2,15}$/, signName, nameAlert) &&
        validateInput(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, signEmail, EmailAlert) &&
        validateInput(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, signPassword, PassAlert)) {
        console.log('all inputs are valid');
        return true;
    } else {
        console.log('something went wrong');
        return false;
    }
}
