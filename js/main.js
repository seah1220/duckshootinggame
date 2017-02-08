
var scoreboard 		= 	new ScoreBoard(),
	amountDucks 	=   10,
	pop_sound 		= 	preloadPopSound(),
	stage 			= 	$('.duck-stage');


// The game is started when the audio is done loading
function start(){
	createDucks(amountDucks, startGame);
}


// Create 10 instances of the duck.
function createDucks(amount, callback) {

	var allDucks = [];
	
	for( var i=0; i<amount; i++) {
		var duck = new Duck({
			position: i*10,
			clickHandler: duckOnClick
		});

		allDucks.push(duck);
	}


	for( var i=0; i<allDucks.length; i++) {
		stage.append(allDucks[i]);
	}

	callback(allDucks);

}


function duckOnClick(duck) {

	playSound();
	
	duck.kill()

	scoreboard.addPoint();

}


function playSound() {
	pop_sound.pause();
	pop_sound.currentTime = 0;
	pop_sound.play();
}


function startGame(allDucks) {
	startDuckAnimation(allDucks)
	countKilledDucks(allDucks)
}


function startDuckAnimation(allDucks) {
	if(allDucks.length) {
		
		for(var i = 0; i<allDucks.length; i++) {
			
			var duck = allDucks[i];

			duck.fly()
		}

	}
}


function countKilledDucks(allDucks) {
	var timer = setInterval(checkDucks, 1000);

	function checkDucks() {
		
		var totalKilled = 0;
		
		for(var i = 0; i<allDucks.length; i++) {
			
			var duck = allDucks[i];

			if(duck.killed) {
				totalKilled ++;
			}
		}

		if(totalKilled === amountDucks) {
			clearInterval(timer);
			scoreboard.reset();
			restartGame();
		}
	}
}


// Restart game // 

function restartGame() {
	var answer = confirm("well done! Wanna play again?");

	if (answer == true) {
		start();
	} else {
		alert('Thanks for playing');
	}
}




//---------
// Preload the pop sound, so we have one instance. And we control that from other places. We only create it once.
function preloadPopSound(){
 	var audio = new Audio('sound/gunshot.wav');

 	audio.preload = "auto";
 	
 	$(audio).on("loadeddata", start);
 	
 	return audio;
}





// Classes
	// Game
		// Initialise
		// Start
		// Restart

		// Uses all of these classes
			// audio (filename)
				// play()
				// stop()

			// stage (element)
				// Add()
				// Remove()

			// Duck (position, clickhandler)
				// Fly()
				// Kill()

			// ScorePts (element)
				// AddPts()
				// DeductPts()
