// Create a container (group)
var container = new createjs.Container();

// Transform and rotate. Any children will be affected.
container.x = 100;
container.rotation = 5;

// Create a shape
var shape = new createjs.Shape(
	new createjs.Graphics().beginFill("#999").drawRect(0,0,50,50)
);

// Create an image
var bitmap = new createjs.Bitmap("path/to/image.png");
bitmap.x = 100;

// Create some text
var text = new createjs.Text("Hello World", "24px Arial", "#990000");
text.x = 200;

// Add it all to the container, which is then put on the stage.
container.addChild(shape, bitmap, text);
stage.addChild(container);
