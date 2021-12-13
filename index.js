//Begin
startday = new Date();
clockStart = startday.getTime();

function initStopwatch() {
	var myTime = new Date();
	return ((myTime.getTime() - clockStart) / 1000);
}

function getSecs() {
	var tSecs = Math.round(initStopwatch());
	var iSecs = tSecs % 60;
	var iMins = Math.round((tSecs - 30) / 60);
	var sSecs = "" + ((iSecs > 9) ? iSecs : "0" + iSecs);
	var sMins = "" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timespent").value = sMins + ":" + sSecs;
	window.setTimeout('getSecs()', 1000);
}
// End
//start variables
var numFrogs = 0;
var frogsPerSec = 0;
var frogsPerClick = 1;
var timePlayed = 0;
var frogEssencePerSecond = 0;
var frogEssence = 0;
//all start item price variables
var croakPrice = 25;
var lilyPadPrice = 100;
//rebirth stuff
var numRebirths = 0;
var rebirthPrice = 1000000;
var rebirthPriceMulti = 1000;
var earningsMulti = 1;
//militia variables
var numSuperCroak = 0;
var numCroaketeers = 0;
var numCroaketeer = 0;
var numLilyPontoon = 0;
var numDirtyWater = 0;
var numFog = 0;
var numUltraCroaker = 0;
var numSwamps = 0;
//militia prices
var superCroakPrice = 75;
var croaketeerPrice = 300;
var lilyPontoonPrice = 250;
var dirtyWaterPrice = 750;
var fogPrice = 1200;
var ultraCroakerPrice = 1750;
var swampsPrice = 2500;
//how many start items you have
var numCroaks = 0;
var numLilyPads = 0;
//price multiplier(s)
var rowOnePriceMulti = 1.1;
var rowTwoPriceMulti = 1.2;
var rowThreePriceMulti = 1.3;
//function to get frogs
function asmlt() {
	numFrogs += frogsPerClick;
	document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs; //updates frogs
}
//function to buy croak
function croak() {
	if (numFrogs >= croakPrice) {
		numCroaks += 1;
		numFrogs -= croakPrice;
		croakPrice *= rowOnePriceMulti;
		frogsPerSec += 1;
		croakPrice = croakPrice.toFixed(0);
		document.getElementById("croaksnum").innerHTML = "Number Of Croaks - " + numCroaks;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("croakprice").innerHTML = "Price - " + croakPrice; //updates croaks, frogs, and price
	} else {
		window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
	}
}
//function to buy lily pads
function lilypad() {
	if (numFrogs >= lilyPadPrice) {
		numLilyPads += 1;
		numFrogs -= lilyPadPrice;
		lilyPadPrice *= rowOnePriceMulti;
		lilyPadPrice = lilyPadPrice.toFixed(0);
		frogsPerClick += 2; //Get +2 more frogs per click
		document.getElementById("lilypadsnum").innerHTML = "Number Of Lily Pads - " + numLilyPads;
		document.getElementById("lilypadprice").innerHTML = "Price - " + lilyPadPrice; //updates lily pad prices and # of pads
	} else {
		window.alert("Issuficient Amount of Frogs");
	}
}
// function for frogs per second
setInterval(function() {
	numFrogs += frogsPerSec; // adds the number of frogs per second to your total frogs
	document.getElementById("frognum").innerText = "Number Of Frogs - " + numFrogs;
	//change the number of frogs in the HTML
}, 1000) // every second (1000 milliseconds)
// function for frog essence per second
setInterval(function() {
	frogEssence += frogEssencePerSecond; // adds the number of frogs per second to your total frogs
	document.getElementById("frogessencetotal").innerText = "Frog Essence - " + frogEssence;
	//change the ammount of essence in the HTML
}, 1000) // every second (1000 milliseconds)
//function that shows how long you have been playing
//croak production functions
function buySuperCroak() {
	if (numFrogs >= superCroakPrice) {
		numSuperCroak += 1;
		numFrogs -= superCroakPrice;
		superCroakPrice *= rowTwoPriceMulti;
		frogsPerSec += 2;
		superCroakPrice = superCroakPrice.toFixed(0);
		document.getElementById("supercroaksnum").innerHTML = "Number Of Super Croakers - " + numSuperCroak;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("supercroakprice").innerHTML = "Price - " + superCroakPrice; //updates croaks, frogs, and price
	} else {
		window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
	}
}
//Lily Pontoon Militia Function
function buyLilyPontoon() {
	if (numFrogs >= lilyPontoonPrice) {
		numLilyPontoon += 1;
		numFrogs -= lilyPontoonPrice;
		lilyPontoonPrice *= rowThreePriceMulti;
		frogsPerClick += 2;
		lilyPontoonPrice = lilyPontoonPrice.toFixed(0);
		document.getElementById("lilypontoonnum").innerHTML = "Number Of Lily Pontoons - " + numLilyPontoon;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("lilypontoonprice").innerHTML = "Price - " + lilyPontoonPrice; //updates Lily Pontoons, frogs, and price
	} else {
		window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
	}
}

function buyCroaketeer() {
	if (numFrogs >= croaketeerPrice) {
		numCroaketeers += 1;
		numFrogs -= croaketeerPrice;
		croaketeerPrice *= rowThreePriceMulti;
		frogsPerClick += 2;
		lilyPontoonPrice = lilyPontoonPrice.toFixed(0);
		document.getElementById("lilypontoonnum").innerHTML = "Number Of Lily Pontoons - " + numLilyPontoon;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("lilypontoonprice").innerHTML = "Price - " + lilyPontoonPrice; //updates Lily Pontoons, frogs, and price
	} else {
		window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
	}
}

function buyDirtyWater() {
	if (numFrogs >= dirtyWaterPrice) {
		numDirtyWater += 1;
		numFrogs -= dirtyWaterPrice;
		dirtyWaterPrice *= 1.7;
		frogsPerClick += 1;
		frogsPerSec += 1;
		frogEssencePerSecond += 1;
		dirtyWaterPrice = dirtyWaterPrice.toFixed(0);
		document.getElementById("dirtywaternum").innerHTML = "Gallons Of Dirty Water - " + numDirtyWater;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("dirtywaterprice").innerHTML = "Price - " + dirtyWaterPrice;
		document.getElementById("frogessencepersec").innerHTML = "Frog Essence Per Second - " + frogEssencePerSecond;
	} else {
		window.alert("Issuficient Amount of Frogs"); //shows if not enough frogs
	}
}
//rebirth function
function rebirth() {
	if (frogEssence >= rebirthPrice) {
		earningsMulti += 0.1;
		numRebirths = +1;
		numFrogs = 0;
		frogsPerSec = 0;
		frogsPerClick = 1;
		timePlayed = 0;
		frogEssencePerSecond = 0;
		frogEssence = 0;
		rebirthPrice *= 1000;
		//all start item price variables
		croakPrice = 25;
		lilyPadPrice = 100;
		//resets all to start stats
		numSuperCroak = 0;
		numCroaketeers = 0;
		numCroaketeer = 0;
		numLilyPontoon = 0;
		numDirtyWater = 0;
		numFog = 0;
		numUltraCroaker = 0;
		numSwamps = 0;
		superCroakPrice = 75;
		croaketeerPrice = 300;
		lilyPontoonPrice = 250;
		dirtyWaterPrice = 750;
		fogPrice = 1200;
		ultraCroakerPrice = 1750;
		swampsPrice = 2500;
		numCroaks = 0;
		numLilyPads = 0;
		rowOnePriceMulti = 1.1;
		rowTwoPriceMulti = 1.2;
		rowThreePriceMulti = 1.3;
		document.getElementById("dirtywaternum").innerHTML = "Gallons Of Dirty Water - " + numDirtyWater;
		document.getElementById("frognum").innerHTML = "Number Of Frogs - " + numFrogs;
		document.getElementById("dirtywaterprice").innerHTML = "Price - " + dirtyWaterPrice;
		document.getElementById("frogessencepersec").innerHTML = "Frog Essence Per Second - " + frogEssencePerSecond;
		document.getElementById("lilypontoonnum").innerHTML = "Number Of Lily Pontoons - " + numLilyPontoon;
		document.getElementById("lilypontoonprice").innerHTML = "Price - " + lilyPontoonPrice; //updates Lily Pontoons, frogs, and price
		document.getElementById("supercroaksnum").innerHTML = "Number Of Super Croakers - " + numSuperCroak;
		document.getElementById("supercroakprice").innerHTML = "Price - " + superCroakPrice; //updates croaks, frogs, and price
		document.getElementById("croaksnum").innerHTML = "Number Of Croaks - " + numCroaks;
		document.getElementById("croakprice").innerHTML = "Price - " + croakPrice; //updates croaks, frogs, and price
		document.getElementById("lilypadsnum").innerHTML = "Number Of Lily Pads - " + numLilyPads;
		document.getElementById("lilypadprice").innerHTML = "Price - " + lilyPadPrice; //updates lily pad prices and # of pads
		document.getElementById("supercroaksnum").innerHTML = "Number Of Super Croakers - " + numSuperCroak;
		document.getElementById("supercroakprice").innerHTML = "Price - " + superCroakPrice; //updates croaks, frogs, and price
		document.getElementById("rebirthcount").innerHTML = "Rebirths - " + numRebirths;
		document.getElementById("rebirthprice").innerHTML = "Essence Price - " + rebirthPrice;
	} else {
		window.alert("Issuficient Amount of Essence"); //shows if not enough frogs
	}
}
