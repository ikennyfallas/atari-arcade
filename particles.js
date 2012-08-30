// Create particle image.
var atariLogoImage = new createjs.Bitmap("../assets/arcadeIcon-64.png");

// Create particle container and add to stage to display particles.
var container = new createjs.Container();
stage.addChild(container);

// Create particle emitter. Pass in container to store, display, and transform particles.
var emitter = new GameLibs.ParticleEmitter(container);

// ParticleEmitter has a default set of particle behaviours. Change the decay rate to fade slower and remove gravity.
var props = {
	decay: 0.98,
	gravity: 0
};

function tick() {
	// Emit 2 particles at (0,0) in container with each update.
	emitter.emit(new createjs.Point(0,0), 2, props, atariLogoImage);
}
