var randomNumber;
var ready2Play = "Are you ready to play?"; 
function setRandom() {
    randomNumber = Math.floor((Math.random()*9.5) +1);
    //Math.floor((Math.random()*9.5)+1);
}
function confirmFunction() {
    var bool = confirm(ready2Play);
    if (bool == true) {
        guessTheNumber(); 
    }
}   

function guessTheNumber() {
var theNumber = Number(prompt("Pick a number", ""));
    if (theNumber > randomNumber) {
        alert("too high");
        guessTheNumber();
    } else if (theNumber < randomNumber) {
        alert("too low");
        guessTheNumber();
    } else if (theNumber == randomNumber) {
        alert("awesome");
        setRandom();
        confirmFunction();      
    }
    
}

setRandom();
confirmFunction();
