

var count = 1;

document.querySelector("#dd-btn").addEventListener("click", show);

function show() {
    
    count++

    if (count % 2 === 0){

        document.getElementById("dd-content").style.display = "block";

    }

    else if (count % 2 === 1){

        document.getElementById("dd-content").style.display = "none";

    }
    
}

document.getElementById("na").innerHTML = (sessionStorage.getItem("nam"));

// Search bar test

var html = ["html", "htm", "ht", "h"]

var css = ["css", "cs"]

var js = ["javascript", "javascrip", "javascri", "javascr", "javascr", "javasc"]

var python = ["python", "pytho", "pyth", "pyt", "py", "p"]

var fol = ["html", "css", "javascript", "python", "c", "c++"]



document.getElementById("search-btn").addEventListener("click", search);

function search (){

    var ff = document.getElementById("search-bar").value    

    if( ff = " "){
        document.getElementById("e").innerHTML= "Fill in a course";
    }

    else if ((html.includes(ff))){
        alert("seen")
    }

    else if ((css.includes(ff))){
        alert("css")
    }

    else if ((js.includes(ff))){
        alert("javascript")
    }

    else if ((python.includes(ff))){
        alert("python")
    }

    else if (ff !== "html", ff !== "css", ff !== "javascript")
        alert("Course not found")
}