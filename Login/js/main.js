var LoginForm = document.getElementById('LoginForm')

var EmailAlert = document.getElementById("EmailAlert")


var allUsers=[];
if(localStorage.getItem('allUsers')!=null){
    allUsers=JSON.parse(localStorage.getItem('allUsers'));
    console.log(allUsers);
}
LoginForm.addEventListener('submit',function(e){
    e.preventDefault();
    
    login()
})




function login(){
    var userData={
        email:signEmail.value,
        password:signPassword.value
    }
    if(   isLoginValid(userData)==true){
        console.log("you logged in");
        EmailAlert.classList.replace('d-block','d-none')

    }
    else {
        EmailAlert.classList.replace('d-none','d-block')
    }
}



function isLoginValid(userData){
for(i=0;i<allUsers.length;i++){
    if(allUsers[i].email.toLowerCase()==userData.email.toLowerCase()&&allUsers[i].password==userData.password){
        console.log("userFound")
        localStorage.setItem('username',allUsers[i].name)

        return true;

    }

}
}











