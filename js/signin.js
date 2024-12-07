
var emailInput=document.querySelector('.emailInput');
var passwordInput=document.querySelector('.passwordInput');
var signInBtn=document.querySelector('.signInBtn');
var allInputs=document.querySelectorAll('input');
var alertP=document.querySelector('.alertP');
var userNameLogIn=document.getElementById('userName');
var usersData=JSON.parse(sessionStorage.getItem("usersData"));
passwordRegex=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
var userNameTest

emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
    return validInputs(emailRegex,emailInput)&&
            validInputs(passwordRegex,passwordInput)
}
for (var i=0;i<allInputs.length;i++){
    allInputs[i].addEventListener('input',function(e){
        if(e.target.classList.contains('emailInput')){
            validInputs(emailRegex,emailInput)
        }else if(e.target.classList.contains('passwordInput')){
            validInputs(passwordRegex,passwordInput)
        }
        console.log(e.target)
    })
}
function clearInputs(){
    emailInput.value=null;
    passwordInput.value=null;
}



function confirmUser(){
    for(var i=0;i<usersData.length;i++){
        if (emailInput.value==usersData[i].userEmail && passwordInput.value==usersData[i].userPassword){
            userNameTest=usersData[i].userName;
            localStorage.setItem('userNameTest', userNameTest);
            window.location.href="file:///C:/Users/user/Desktop/Esraa%20gamil-C44%20Sat%20&%20Tue%206pm-9pm%20Offline-Assignment14/home.html"
        }else if(emailInput.value==usersData[i].userEmail || passwordInput.value==usersData[i].userPassword){
            
            alertP.innerHTML="Either user name or password is incorrect please try again!";
            
        }else{
           
            alertP.innerHTML="You have no account sign up and try again!"
        }
    }
}


signInBtn.addEventListener('click',function(){
    confirmUser();
    })