// The game framework calls tick at regular intervals while the game is running.
function tick(tickFactor) {
	// Move ball
	this.ball.x += (this.ball.vx * tickFactor);
	this.ball.y += (this.ball.vy * tickFactor);

	// Note: the tickFactor tells you the the speed the game is running relative to the
	// defined framerate so you can ensure the game runs at a steady speed.
}