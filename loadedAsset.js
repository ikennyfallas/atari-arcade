// The game manifest includes an image
var assets = [
	{id:"projectile", src:"images/projectile.png"}
];

// Inside the game, we just do this
function initialize(assets, stage) {
	var bitmap = new createjs.Bitmap(assets.projectile);
	stage.addChild(bitmap);
}