//Begin
startday=new Date();
clockStart=startday.getTime();

function initStopwatch() {
    var myTime=new Date();
    return((myTime.getTime() - clockStart)/1000);
}

function getSecs() {
    var tSecs=Math.round(initStopwatch());
    var iSecs=tSecs % 60;
    var iMins=Math.round((tSecs-30)/60);
    var sSecs=""+((iSecs > 9) ? iSecs : "0"+ iSecs);
    var sMins=""+((iMins > 9) ? iMins : "0"+ iMins);
    document.getElementById("timespent").value=sMins+":"+sSecs;
    window.setTimeout('getSecs()', 1000);
}

// End


//start variables
var numFrogs=0;
var frogsPerSec=0;
var frogsPerClick=1;
var timePlayed=0;

//all start item price variables
var croakPrice=10;
var lilyPadPrice=100;

//militia variables
var numSuperCroak=0;
var numCroaketeers=0;
var numCroaketeer=0;
var numDirtyWater=0;
var numFog=0;
var numUltraCroaker=0;
var numSwamps=0;

//militia prices
var superCroakPrice=300;
var croaketeerPrice=500;
var dirtyWater=1000;
var fogPrice=1200;
var ultraCroakerPrice=1500;
var swampsPrice=200;

//how many start items you have
var numCroaks=0;
var numLilyPads=0;

//price multiplier(s)
var rowOnePriceMulti=1.2;
var rowTwoPriceMulti=1.5;
var rowThreePriceMulti=1.8;

//function to get frogs
function asmlt() {
    numFrogs+=frogsPerClick;
    document.getElementById("frognum").innerHTML="Number Of Frogs - "+numFrogs; //updates frogs
}

//function to buy croak
function croak() {
    if(numFrogs >=croakPrice) {
        numCroaks+=1;
        numFrogs -=croakPrice;
        croakPrice *=rowOnePriceMulti;
        frogsPerSec+=1;
        croakPrice = croakPrice.toFixed(0);
        document.getElementById("croaksnum").innerHTML="Number Of Croaks - "+numCroaks;
        document.getElementById("frognum").innerHTML="Number Of Frogs - "+numFrogs;
        document.getElementById("croakprice").innerHTML="Price - "+croakPrice; //updates croaks, frogs, and price

    }

    else {
        window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
    }
}

//function to buy lily pads
function lilypad() {
    if(numFrogs >=lilyPadPrice) {
        numLilyPads+=1;
        numFrogs -=lilyPadPrice;
        lilyPadPrice *=rowOnePriceMulti;
        lilyPadPrice = lilyPadPrice.toFixed(0);
        frogsPerClick *=2; //Get 2X more frogs per click
        document.getElementById("lilypadsnum").innerHTML="Number Of Lily Pads - "+numLilyPads;
        document.getElementById("lilypadprice").innerHTML="Price - "+lilyPadPrice; //updates lily pad prices and # of pads

    }

    else {
        window.alert("Issuficient Amount of Frogs");
    }
}

// function that happens every second
setInterval(function() {
        numFrogs +=frogsPerSec; // adds the number of frogs per second to your total frogs
        document.getElementById("frognum").innerText="Number Of Frogs - "+ numFrogs;
        //change the number of frogs in the HTML
    }

    , 1000) // every second (1000 milliseconds)

//function that shows how long you have been playing

//croak production functions
function buySuperCroak() {
    if(numFrogs >=superCroakPrice) {
        numSuperCroak+=1;
        numFrogs -=superCroakPrice;
        superCroakPrice *=rowTwoPriceMulti;
        frogsPerSec+=2;
        superCroakPrice = superCroakPrice.toFixed(0);
        document.getElementById("supercroaksnum").innerHTML="Number Of Super Croakers - "+numSuperCroak;
        document.getElementById("frognum").innerHTML="Number Of Frogs - "+numFrogs;
        document.getElementById("supercroakprice").innerHTML="Price - "+superCroakPrice; //updates croaks, frogs, and price

    }

    else {
        window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
    }
}


//militia upgrade functions
function buyCroaketeer() {
    if(numFrogs >=croaketeerPrice) {
        numCroaketeers+=1;
        numFrogs -=croaketeerPrice;
        croaketeerPrice *=rowThreePriceMulti;
        frogsPerClick+=1;
        frogsPerSec+=2;
        croaketereerPrice = croaketeerPrice.toFixed(0);
        document.getElementById("croaketeernum").innerHTML="Number Of Croaketeers - "+numCroaketeers;
        document.getElementById("frognum").innerHTML="Number Of Frogs - "+numFrogs;
        document.getElementById("croaketeerprice").innerHTML="Price - "+croaketeerPrice; //updates croaketeers, frogs, and price

    }

   else {
        window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
    }
}
