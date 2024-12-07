var nameInput=document.querySelector('.nameInput');
var emailInput=document.querySelector('.emailInput');
var passwordInput=document.querySelector('.passwordInput');
var signUpBtn=document.querySelector('.signUpBtn');
var signInBtn=document.querySelector('.signInBtn');
var allInputs=document.querySelectorAll('input');
var alertP=document.querySelector('.alertP');
var userNameLogIn=document.getElementById('userName');
var userNameTest
var usersData=sessionStorage.getItem("usersData")?JSON.parse(sessionStorage.getItem("usersData")):[];

passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
nameRegex=/^[a-zA-Z]{3,50}$/;
function validInputs(inputRegex,inputValue){
if(inputRegex.test(inputValue.value)){
    inputValue.classList.add('is-valid');
    inputValue.classList.remove('is-invalid');
    return true
}else{
    inputValue.classList.remove('is-valid');
    inputValue.classList.add('is-invalid');
    return false
}
}
function confirmInputs(){
    return validInputs(nameRegex,nameInput)&&
            validInputs(emailRegex,emailInput)&&
            validInputs(passwordRegex,passwordInput)
}
for (var i=0;i<allInputs.length;i++){
    allInputs[i].addEventListener('input',function(e){
        if(e.target.classList.contains('nameInput')){
            validInputs(nameRegex,nameInput)
        }else if(e.target.classList.contains('emailInput')){
            validInputs(emailRegex,emailInput)
        }
        else if(e.target.classList.contains('passwordInput')){
            validInputs(passwordRegex,passwordInput)
        }
        console.log(e.target)
    })
}
function checkInputs(){
   if(nameInput.value==null&&emailInput.value==null&&passwordInput.value==null){
    alertP.classList.add('d-none');
    alertP.classList.remove('d-block');
   }
   else{
    alertP.classList.remove('d-none');
    alertP.classList.add('d-block');
   }
}




// sign up ===========>store user data
function addUser(){
    if(nameInput.value==""||emailInput.value==""||passwordInput.value==""){
        alertP.innerHTML="All inputs is required";
    }else if (confirmInputs()){
        var oneUser={
            userName:nameInput.value,
            userEmail:emailInput.value,
            userPassword:passwordInput.value
        }
        usersData.push(oneUser);
        localStorage.setItem('userNameTest', oneUser.userName);
    sessionStorage.setItem("usersData",JSON.stringify(usersData));
    checkInputs();
    clearInputs()
    }else{
        alertP.innerHTML="Sorry! try again"
    }
 
window.location.href = "file:///C:/Users/user/Desktop/Esraa%20gamil-C44%20Sat%20&%20Tue%206pm-9pm%20Offline-Assignment14/home.html";

}



function clearInputs(){
    nameInput.value=null;
    nameInput.classList.remove('is-valid');
    emailInput.value=null;
    emailInput.classList.remove('is-valid');
    passwordInput.value=null;
    passwordInput.classList.remove('is-valid');
}
signUpBtn.addEventListener('click',function(){
    addUser()
})

console.log(usersData)
