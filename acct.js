


// test
document.getElementById("name").innerHTML = (chuser.value)

document.getElementById("user").addEventListener("click", add)

function add(){

    document.getElementById("cuser").style.display = "block";

}

document.getElementById("csub").addEventListener("click", addi)

function addi(){

    document.getElementById("name").innerHTML = (chuser.value)

    document.getElementById("cuser").style.display = "none";

}

// Main code

var count = 1;

document.getElementById("show").addEventListener("click", show);

function show() {
    
    count++

    if (count % 2 === 0){

        document.getElementById("hidden").style.display = "block";

    }

    else if (count % 2 === 1){

        document.getElementById("hidden").style.display = "none";

    }
    
}

