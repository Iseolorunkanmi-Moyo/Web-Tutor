//stored data variable
var username = ["moyo"];

var password = ["joseph"];

let empty = undefined;

var userCheck = (username.includes( userInput.value))

var used = (userInput.value).toLowerCase;
//User name input



document.getElementById("submit").addEventListener("click", subuser);

var jay = username.includes(used);

function subuser(){ 

if  (userInput.value === ''){

    alert("Fill in username");

}

else if (jay = false){

    alert("This username not found");

}

else if (passwordInput.value === ''){

    alert("Fill in your password");

}

else {
    
    username.push(

    document.getElementById("userInput").value);

    password.push(

    document.getElementById("passwordInput").value);

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