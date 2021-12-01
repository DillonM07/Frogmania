var numFrogs = 0;

function asmlt() {
    numFrogs = numFrogs + 1;
    document.getElementById("frognum").innerHTML = 
    "Number Of Frogs - " + numFrogs;
}

var numCroaks = 0;

function croak() {
    if(numFrogs >= croakPrice) {
        numCroaks += 1;
        numFrogs -= croakPrice ;
        document.getElementById("croaksnum").innerHTML =
        "Number Of Croaks - " + numCroaks;
        document.getElementById("frognum").innerHTML = 
        "Number Of Frogs - " + numFrogs;
    }
    else {
        window.alert("Issuficient Amount of Frogs");
    }
}

var croakPrice = 10;
