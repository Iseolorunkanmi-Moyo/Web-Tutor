//stored data variable

var username = ["moyo", "jay" ];

var password = ["joseph"];

var userCheck = (username.includes( userInput.value))

var used = (userInput.value).toLowerCase;

var ink = (passwordInput.value).toLowerCase;

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

else if (( username.includes(userInput.value))=== false){

    alert("This username not found");

}

else if((password.includes(passwordInput.value))=== false){
    alert("Password incorrect")
} 



else if (jay = true, john = true) {
    
    username.push(

    document.getElementById("userInput.value"));

    password.push(

    document.getElementById("passwordInput.value"));

    document.getElementById("submit").style.backgroundColor = ("gray") ;
  
    const al = setTimeout(
        mm, 1000)

        function mm (){
            (window.open("hi.html", "_top"))
        }
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

var hh = 1;

export  {hh};