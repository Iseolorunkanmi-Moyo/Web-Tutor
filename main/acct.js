var user = localStorage.getItem("nam");

var pass = localStorage.getItem("pass");

// alert(user);

// alert(pass);

document.getElementById("name").innerHTML = user;

document.getElementById("password").innerHTML = pass;

document.getElementById("return").addEventListener("click", retur);

function retur(){
    history.back();
}