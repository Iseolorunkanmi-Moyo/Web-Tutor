//stored data variable
var username = ["moyo"];

var password = ["joseph"];

let empty = undefined;

var userCheck = (username.includes( userInput.value))

var used = (userInput.value).toLowerCase;

var ink = (passwordInput.value).toLowerCase

//User name input

document.getElementById("submit").addEventListener("click", subuser);

function subuser(){ 

var jay = username.includes(used);

var john = password.includes(ink);    

if  (userInput.value === ''){

    alert("Fill in username");

}

else if (passwordInput.value === ''){

    alert("Fill in your password");

}

else if (jay = false){

    alert("This username not found");

}

else if( john = false){
    alert("Password incorrect")
}

else if (jay = true, john = true) {
    
    username.push(

    document.getElementById("userInput.value"));

    password.push(

    document.getElementById("passwordInput.value"));

    document.getElementById("submit").style.backgroundColor = ("gray") ;

    window.open("hi.html","_top");
}

}

// pivacy eye for password
var count = 1;

document.getElementById("see").addEventListener("click", text);

function text () {
     
    count++

    if (count % 2 === 0){

        passwordInput.type = "text";

        document.getElementById("see").style.backgroundImage="url(crossed-eye.png)";

    }

    else if (count % 2 === 1){

        passwordInput.type = "password"

        document.getElementById("see").style.backgroundImage="url(eye.webp)";

    }
}