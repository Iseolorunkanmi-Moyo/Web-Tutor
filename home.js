//stored data variable
var username = ["moyo"];

var password = ["joseph"];

let empty = undefined;

var userCheck = (username.includes( userInput.value))

var gen = (userInput.value).toLowerCase;
//User name input

var names = userInput.value

    var firstChar = (names).slice(0,1);
    
    var upperCaseFirstChar = firstChar.toUpperCase();
    
    var restofname = (userInput.value).slice(1,names.length);
    
    var fullName = upperCaseFirstChar + restofname;


document.getElementById("submit").addEventListener("click", subuser);

var jay = username.includes(gen);

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

    open("hi.html","_top");
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

document.getElementById("footer").innerHTML= Date();
