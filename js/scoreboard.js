var ScoreBoard = function() {

	var scoreboard 	= $('.counter');
	var scoreText 	= $('.score');
	var score 		= 0;

	scoreboard.addPoint = function() {
		score++;
		scoreboard.updateText();
	}

	scoreboard.updateText = function() {
		scoreText.text(score);
	}
	
	scoreboard.reset = function() {
		score = 0;
		scoreboard.updateText();
	}

	return scoreboard;
}