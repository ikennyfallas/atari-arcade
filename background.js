// An asset in the game manifest, which preloads the background
var manifest = [
	{id: "background", src:"images/background.png"}
];

// Backgrounds can be changed in the initialize
// Or alternately somewhere in the game, like a level change.
function initialize(stage, assets, gameInfo) {

	// Note that the background is provided as part of the assets.
	GameLibs.GameUI.changeBackground(assets.background);
}