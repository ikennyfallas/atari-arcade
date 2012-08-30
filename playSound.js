function preload() {
	var preloader = new createjs.PreloadJS();

	// SoundJS helps resolve paths, and preload audio properly
	preloader.installPlugin(createjs.SoundJS);

	preloader.onComplete = preloadCompleteHandler;

	// Preload a whole manifest
	preloader.loadManifest([
		// Recommended approach
		{id:"music", src:"path/to/sound.mp3"},

		// Point to both an OGG and MP3
		{id:"music", src:"path/to/sound.mp3|path/to/sound.ogg"},

		// Preload a few channels
		{id:"music", src:"path/to/sound.mp3", data:3}

	]);

	// Or just preload a single sound.
	preloader.loadFile({id:"music", src:"path/to/sound.mp3", data:3});
}

// Play a sound instance.
function playSound() {
	var instance = createjs.SoundJS.play("music");

	// Control the instance using a reference
	instance.pause();
	instance.setVolume(0.5);

	// Get notified when a sound finishes.
	instance.onComplete = playbackCompleteHandler;
}