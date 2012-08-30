// Initialization is a great time to set up touch controls
function initialize(stage, assets, gameInfo) {
	// This setting comes from the gameInfo
	if (gameInfo.touchEnabled) {

		// Create a joystick. There are lots of awesome 
		// configurations, but this is all you need to get 
		// started. Check out the docs for options!
		var joystick = new GameLibs.Joystick(stage);
		joystick.setPosition(25, 25);
		stage.addChild(joystick);
	}
}