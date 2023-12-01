// test
//user
var nameUser = userInput.value

var FCU = nameUser.slice(0,1);

var UFU = FCU.toUpperCase();

var Ronu = nameUser.slice(1,nameUser.length);

var capUserName = UFU + Ronu;

const us = capUserName;

//password
var namePass = passwordInput.value

var FCP = namePass.slice(0,1);

var UFP = FCP.toUpperCase();

var Ronp = namePass.slice(1,namePass.length);

var capPassName = UFP + Ronp;

let pass = capPassName;

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

   
    
    localStorage.removeItem("nam",userInput.value);

    localStorage.removeItem("pass", passwordInput.value);

    localStorage.setItem("nam",userInput.value);

    localStorage.setItem("pass", passwordInput.value);

    username.push(

    document.getElementById("userInput.value"));

    password.push(

    document.getElementById("passwordInput.value"));

 
  
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

        document.getElementById("see").style.backgroundImage="url(/Images/hide.png)";

        
    }

    else  {

        passwordInput.type = "password"

        document.getElementById("see").style.backgroundImage="url(/Images/eye.png)";

    }

}



// function updateClock() {

//     let currentTime = new Date();
   
//     let hours = currentTime.getHours();
   
//     let minutes = currentTime.getMinutes();
   
//     let seconds = currentTime.getSeconds();
   
   
//     if (hours < 10) {
   
//        hours = "0" + hours;
   
//     }
   
//     if (minutes < 10) {
   
//        minutes = "0" + minutes;
   
//     }
   
//     if (seconds < 10) {
   
//        seconds = "0" + seconds;
   
//     }
   
   
//     let timeString = hours + ":" + minutes + ":" + seconds;
   
//     document.getElementById("date").innerText = timeString;
   
//    }
   
   
//    updateClock();
   
//    setInterval(updateClock, 1000);