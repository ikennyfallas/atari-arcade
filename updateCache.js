// The Arena.js contains the stamp method
function stamp(stamp) {
	// Clear out any old children. They aren't drawn so they 
	// only get removed when we want to stamp something new.
	this.groundLayer.removeAllChildren();

	// Stamp the new sprite on top of existing cache
	this.groundLayer.addChild(stamp);

	// Using source-over, it just applies on top
	this.groundLayer.updateCache("source-over");
}