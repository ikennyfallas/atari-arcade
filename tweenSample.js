// Tween the character back and forth, turning the eyes on and off.
createjs.Tween.get(yar, {loop:true})
		.wait(3000)
		.call(yar.gotoAndStop, [1], yar) // red eyes
		.wait(300)
		.to({x:450}, 1200, createjs.Ease.backInOut) // move
		.call(yar.gotoAndStop, [0], yar)
		.wait(3000)
		.call(yar.gotoAndStop, [1], yar)
		.wait(300)
		.to({x:50}, 1200, createjs.Ease.backInOut)
		.call(yar.gotoAndStop, [0], yar);

// Hover the character up and down
createjs.Tween.get(yar, {loop:true})
		.to({y:20}, 500, createjs.Ease.quadInOut)
		.to({y:0}, 500, createjs.Ease.quadInOut);