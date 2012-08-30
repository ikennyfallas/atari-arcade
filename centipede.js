// Define a spritesheet. Zöe is great for this.
var json = {};
var spritesheet = new createjs.SpriteSheet(json);

// Create a centipede container to control
var centipede = new createjs.Container();

// Create 10 centipede pieces.
for (var i= 0; i<10; i++) {
	var piece = new createjs.BitmapAnimation(spritesheet);
	piece.gotoAndStop(i=0 ? "head" : "body");
	piece.x = i*30;
	centipede.addChild(piece);
}
stage.addChild(centipede);

// Each tick, move the centipede. Once it reaches the end, it loops back.
function tick() {
	centipede.x = (centipede.x + 5) % 700;
}