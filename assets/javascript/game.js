// created a variable that holds an array of all the possble guesses the computer will make
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    	'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//created a list of variables that will hold the score for wins, losses, the amount of guesses used, and guesses left
var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var userGuess = 0;

    //created an empty array that will house the user's guesses as they make them
    var guesses = [];

    //created a vairable that will generate random guesses by the computer
		var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//Global code ---
		document.onkeypress = function(event) {

	     //this variable is so that when a key is pressed, the system will store this key as the users guess
    		var userGuess = event.key;

        //this variable turns the users guess to lower case so that even if caps lock is on, the key will return as lower case
    		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // console log helps see what the computer generates
   	 		console.log("Computer Choice: " + computerChoice);

        //console log created for user guess and wins and losses to track how code is working
   	 		console.log("User Guess: " + userGuess);
   	 		console.log("wins: " + wins);
   	 		console.log("losses: " + losses);
   	 		console.log("Guesses Left: " + guessesLeft);
   	 		console.log("Guesses so far: " + userGuess);

    	//generated if statement so that if the user guess is the same as the computer's choice, the system will display "You Win!!", the win count will increase by 1, the amount of user guesses will reset to 9, and the user's guesses will reset to none
    	if (userGuess === computerChoice) {
        alert("You Win!!")
        	wins++;
        	guessesLeft = 9;
        	guesses.length = 0;
        	document.getElementById('wins').innerHTML = "Wins: " + wins;
        	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }


        // the user does not guess the computer's choice, the system will allow 9 times total to guess. The guesses left count will decrease by one, and store the users guesses until all 9 have been exhausted.
        else if ((userGuess !== computerChoice) && (guessesLeft >= 1)) {
          guessesLeft--;
          guesses.push(userGuess);
          document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
         document.getElementById('uGuess').innerHTML = "Your Guesses So Far: " + guesses;
        }
  
        //if the user does not guess the computer's choice within the 9 choices, the system will display "YOU LOSE!", and the losses count will increase by one. The user guess count will reset to 9, and the guesses so far will reset to none
        else if ((userGuess !== computerChoice) && (guessesLeft === 0)) {
        	alert("YOU LOSE!")
          losses++;
        	guessesLeft = 9;
        	guesses.length = 0;
        	document.getElementById('losses').innerHTML = "Losses: " + losses;
        	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }


        
   	
}