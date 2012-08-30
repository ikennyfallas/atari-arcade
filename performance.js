// Create a performance monitor
var minFPS = 20;
var threshold = 20; // The number of ticks before toggling low quality
var perf = new GameLibs.PerformanceMonitor(toggleLowQuality, minFPS, threshold);

// Once low quality is toggled, turn off the heavy firework effect.
function toggleLowQuality(lowQuality) {
	if (lowQuality) {
		fireworksEffect.enabled = false;
	}
}

// During a tick, only emit particles if in high quality mode.
function tick() {
	if (perf.lowQualityMode == false) {
		particleEmitter.emit(ball.position, 100, particleProps, defaultParticle);
	}
}