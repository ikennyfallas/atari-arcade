var button = new createjs.Bitmap(imagePath);

// Standard display object mouse events
button.onPress = handlePress;

// Simple drag and drop. The events are automatically removed for you.
function handlePress(event) {
	event.onMouseMove = handleDrag;
}

function handleDrag(event) {
	button.x = event.stageX;
	button.y = event.stageY;
}