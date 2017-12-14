var choices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winText = 0
var lossText = 0
var guessesLeft = 0 
var userGuess = 0
document.click = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if