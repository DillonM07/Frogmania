//Begin
startday = new Date();
clockStart = startday.getTime();
function initStopwatch() {
var myTime = new Date();
return((myTime.getTime() - clockStart)/1000);
}
function getSecs() {
    var tSecs = Math.round(initStopwatch());
    var iSecs = tSecs % 60;
    var iMins = Math.round((tSecs-30)/60);
    var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
    document.getElementById("timespent").value = sMins+":"+sSecs;
    window.setTimeout('getSecs()',1000);
}
// End


//start variables
var numFrogs = 0;
var frogsPerSec = 0;
var frogsPerClick = 1;
var timePlayed = 0;

//all item price variables
var croakPrice = 10;
var lilyPadPrice = 100;

//how many items you have
var numCroaks = 0;
var numLilyPads = 0;

//price multiplier(s)
var rowOnePriceMulti = 2;
var rowTwoPriceMulti = 3;
var rowThreePriceMulti = 4;

//function to get frogs
function asmlt() {
    numFrogs += frogsPerClick;
    document.getElementById("frognum").innerHTML = 
    "Number Of Frogs - " + numFrogs;//updates frogs
}

//function to buy croak
function croak() {
    if(numFrogs >= croakPrice) {
        numCroaks += 1;
        numFrogs -= croakPrice;
        croakPrice *= rowOnePriceMulti;
        frogsPerSec += 1;
        document.getElementById("croaksnum").innerHTML =
        "Number Of Croaks - " + numCroaks;
        document.getElementById("frognum").innerHTML = 
        "Number Of Frogs - " + numFrogs;
        document.getElementById("croakprice").innerHTML =
        "Price - " + croakPrice;//updates croaks, frogs, and price
        
    }
    else {
        window.alert("Issuficient Amount of Frogs");//shows if not enough frogs
    }
}
//function to buy lily pads
function lilypad() {
    if(numFrogs >= lilyPadPrice) {
    numLilyPads += 1;
    numFrogs -= lilyPadPrice;
    lilyPadPrice *= rowOnePriceMulti;
    frogsPerClick *= 2;//Get 2X more frogs per click
    document.getElementById("lilypadsnum").innerHTML =
    "Number Of Lily Pads - " + numLilyPads;
    document.getElementById("lilypadprice").innerHTML =
    "Price - " + lilyPadPrice;//updates lily pad prices and # of pads
    
}
    else {
        window.alert("Issuficient Amount of Frogs");
    }
}
// function that happens every second
    setInterval(function() {
	    numFrogs += frogsPerSec; // adds the number of frogs per second to your total frogs
        document.getElementById("frognum").innerText = 
	    "Number Of Frogs - "  + numFrogs;
	    //change the number of frogs in the HTML
    }, 1000) // every second (1000 milliseconds)
    
//function that shows how long you have been playing
    setInterval(function() {
        
    }, 1000)
