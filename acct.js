document.getElementById("name").innerHTML= (" hi");
 
document.getElementById("age").innerHTML= (" hi");

document.getElementById("no").innerHTML= (" hi");

document.getElementById("address").innerHTML= (" hi");

document.getElementById("name").innerHTML= (" hi");
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