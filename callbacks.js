function onKillPlayer() {
	// Who are we kidding? You lost. Yars is hard!
	this.lives--;
	if (this.lives == 0) {

		// Normally we might do something fancy first.
		// Like fade out the player, or show a death animation
		this.onGameOver();
	}
}