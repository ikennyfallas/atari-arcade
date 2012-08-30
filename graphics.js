// A Graphics object that represents the Atari Logo.
// Each graphic command is chained to the previous one.
var logo = new createjs.Graphics()
	.beginFill("#ff0000")
	.moveTo(37,3).lineTo(41,3).lineTo(41,23)
		.quadraticCurveTo(41,62,8,68)
		.lineTo(8,59).quadraticCurveTo(37,53,37,3).cp()
	.dr(44,3,10,65)
	.moveTo(61,3).lineTo(57,3).lineTo(57,23)
		.quadraticCurveTo(57,62,90,68)
		.lineTo(90,59).quadraticCurveTo(61,53,61,3).cp()