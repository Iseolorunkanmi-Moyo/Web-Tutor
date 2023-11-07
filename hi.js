document.getElementsById("dd-btn").addEventListener("click", show);

function show() {
    
    count++

    if (count % 2 === 0){

        document.getElementsByClassName("dd-content").style.display = "block";

    }

    else if (count % 2 === 1){

        document.getElementsByClassName("dd-content").style.display = "none";

    }
    
}