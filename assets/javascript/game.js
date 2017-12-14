var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    	'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var userGuess = 0;
		var guesses = [];
		var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


		document.onkeypress = function(event) {
	
    		var userGuess = event.key;
    		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

   	 		console.log("Computer Choice: " + computerChoice);

   	 		console.log("User Guess: " + userGuess);
   	 		console.log("wins: " + wins);
   	 		console.log("losses: " + losses);
   	 		console.log("Guesses Left: " + guessesLeft);
   	 		console.log("Guesses so far: " + userGuess);

    	
    	if (userGuess === computerChoice) {
        	wins++;
        	guessesLeft = 9;
        	guesses.length = 0;
        	document.getElementById('wins').innerHTML = "Wins: " + wins;
        	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        else if ((userGuess !== computerChoice) && (guessesLeft === 0)) {
        	losses++;
        	guessesLeft = 9;
        	guesses.length = 0;
        	document.getElementById('losses').innerHTML = "Losses: " + losses;
        	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        else if ((userGuess !== computerChoice) && (guessesLeft >= 1)) {
        	guessesLeft--;
        	guesses.push(userGuess);
        	document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
			document.getElementById('uGuess').innerHTML = "Your Guesses So Far: " + guesses;
        }
	
        
   	
}