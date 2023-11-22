// test

var nameUser = userInput.value

var FC = nameUser.slice(0,1);

var UFC = FC.toUpperCase();

var Ron = nameUser.slice(1,nameUser.length);

var capName = UFC + Ron;

var has = capName;


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

    document.getElementById("uu").innerHTML = "Fill in Username!"

}

else if (passwordInput.value === ''){

    document.getElementById("pp").innerHTML = "Fill in Password!"

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

    sessionStorage.removeItem("nam",has)

    sessionStorage.setItem("nam",has)
  
    const al = setTimeout(
        mm, 1000)

        function mm (){
            (window.open("homepage.html", "_top"))
        }
}

}

// pivacy eye for password

document.getElementById("see").addEventListener("click", text);

function text () {
     
    if (passwordInput.type === "password"){

        passwordInput.type = "text";

        document.getElementById("see").style.backgroundImage="url(hide.png)";

        
    }

    else  {

        passwordInput.type = "password"

        document.getElementById("see").style.backgroundImage="url(eye.png)";

    }

}





