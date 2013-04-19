

var randomNumber;
var hasWon = false;


function setRandom() {
    randomNumber = Math.floor((Math.random()*9.5) +1);
}

setRandom();

function guessTheNumber() {
    var theNumber = Number(document.getElementById("txtbox").value);
    var message = document.getElementById("message");
    if (hasWon === true) {
        return;
    }
   if (theNumber > randomNumber) {
        message.innerHTML = "too high";
} else if (theNumber < randomNumber) {
        message.innerHTML = "too low";
} else if (theNumber == randomNumber) {
       message.innerHTML = "awesome";
       hasWon = true;
} else {
   alert("What's going on?");
   }
}

function replay() {
    document.getElementById("txtbox").value = '';
    document.getElementById("message").innerHTML = ' ';
    setRandom();
    hasWon = false;
}

