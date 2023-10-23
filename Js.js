//stored data variable
var username = [];

var password = [];

var empty = {};

var userCorr = (userInput.value === empty);

var usernameInput = username.includes(userInput.value);

var passwordCorrection = (passwordInput.value === empty);

//User name input
document.getElementById("submit").addEventListener("click", subuser);

function subuser(){

if  (userCorr === true) {
    document.getElementById(userInput.placeholder).innerText = "Fill in your username"
}


else if(username.includes(userInput.value)){
    alert("This username is taken");
}

if  (passwordCorrection === true) {
    alert  ("Fill in password");
}

else if (userCorr === false, usernameInput === false, passwordCorrection ===false )  {   
    
    
    username.push(

    document.getElementById("userInput").value);

    password.push(

    document.getElementById("passwordInput").value);

    document.getElementById("well").innerHTML = ("Welcome " + userInput.value);

    
}
}


document.getElementById("but").addEventListener("click", leet );

function leet ()  {
    alert ("My Name is " + userInput.value);
    alert ("My password is " + passwordInput.value);
}


var count = 1;

document.getElementById("see").addEventListener("click", text);

function text () {
     
    count++

    if (count % 2 === 0){

        passwordInput.type = "text"

    }

    else if (count % 2 === 1){

        passwordInput.type = "password"

    }

}