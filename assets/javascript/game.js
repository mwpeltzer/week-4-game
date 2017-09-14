

	// Creates a user score variable that starts at zero
	var userScore = 0;
	var wins = 0;
	var losses = 0;

	// This creates a random number between 19 and 120
	var computerRandom = getRandomInt(19, 120);
	console.log(computerRandom);

	// This creates a random number between 1 and 12 - will be used in each picture div
	var userRandom = getRandomInt(1, 12);
	console.log(userRandom);

	// This is a random integer generator between 2 values
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max-min)) + min;
		conosle.log(getRandomInt);
	}

	// Inputs the computers guess to the page 
	$("#computer-random").html(computerRandom);

	// Makes the image divs clickable
	$("#crystal-div").on("click", function() {
		alert("you clicked the crystal");
	});

	// Creates an array of the class gem
	var gems = $(".gem");
	
	for (var i=0; i < gems.length; i++) {
		$(gems[i]).attr("data-crystalvalue", userRandom(min, max));
		
	}
	
	// This is as far as I got, so I just did pseudocode for the remainder


// 	  Make the crystal variable clickable so that each time it is clicked,
//    the value is doubled (from whatever integer is selected randomly at the start) 

// 	  create an 'if' statement that states if the user matches the computerRandom, an
//    html appears saying you won and the tally in the wins column goes up by 1

//    if not, "you lost" appers and the loss tally increases by 1

//    at the end of both of these conditionals, the game should restart

