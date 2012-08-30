// Each time score is added, tween the value.
function addScore(score) {
	// Save the new score
	this.newScore = score;

	// Create a tween that will update the "displayScore", which
	// we use to display the changing number.
	var tween = createjs.Tween.get(this).to({displayScore:score}, 800);

	// For this example, set a local "scope" so the onChange
	// callback has something to refer to.
	var scope = this;

	// As the tween runs, it will call "onChange"
	tween.onChange = function(tween) {
		// Update the text instance with "displayScore".
		scope.text.text = scope.displayScore;
	}
}

// The "ScoreManager" abstracts the score formatting and tweening.
function killEnemy(points) {
	this.scoreManager.addScore(points);
}