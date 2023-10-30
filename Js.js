//stored data variable
var username = ["moyo"];

var password = ["joseph"];

let empty = undefined;

var userCheck = (username.includes( userInput.value))

var usecheck = (userCheck === false)





//User name input
document.getElementById("submit").addEventListener("click", subuser);

function subuser(){

if  (usecheck = false){
    alert("Fill in username");
}
 
else if (userCheck = true){
    
    username.push(

    document.getElementById("userInput").value);

    password.push(

    document.getElementById("passwordInput").value);

    document.getElementById("well").innerHTML = ("Welcome " + userInput.value);

    var names = userInput.value

    var firstChar = (names).slice(0,1);
    
    var upperCaseFirstChar = firstChar.toUpperCase();
    
    var restofname = (userInput.value).slice(1,names.length);
    
    var fullName = upperCaseFirstChar + restofname;

    document.getElementById("profilename").innerHTML = (fullName);

    window.open("hi.html",);

}
}


document.getElementById("but").addEventListener("click", leet );

function leet ()  {
    alert ("Your username is " + userInput.value);
    alert ("Your password is " + passwordInput.value);
    alert(fullName);
}



// pivacy eye for password
var count = 1;

document.getElementById("see").addEventListener("click", text);

function text () {
     
    count++

    if (count % 2 === 0){

        passwordInput.type = "text"
        document.getElementById("see").style.backgroundImage="url(crossed-eye.png)";

    }

    else if (count % 2 === 1){

        passwordInput.type = "password"
        document.getElementById("see").style.backgroundImage="url(eye.webp)";
    }
}



