function killPlayer() {
	// Create a tween
	var tween = createjs.Tween.get(this.player).wait(100);
	for (var i= 0; i&lt;5; i++) {
		// Tween in and out the player five times
		tween.to({alpha:1}, 200)
			.to({alpha:0}, 600, createjs.Ease.quadOut);
	}

	// After 2 seconds, show a dialog.
	// After another 3, hide it, and restart the game.
	createjs.Tween.get(this)
			.wait(2000)
			.call(this.showGameOverDialog, null, this)
			.wait(3000)
			.call(this.hideGameOverDialog, null, this)
			.call(this.restartGame, null, this);
}