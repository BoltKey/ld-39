console.log("hi")
var GRIDW = 20;
var GRIDH = 15;
var TILES = 15;
var GRIDX = 30;
var GRIDY = 30;
var base;
var player;
var canvas;
var ctx;
function main() {
	base = new Base();
	player = new Player();
	
	canvas = $("#game")[0];
	ctx = canvas.getContext('2d');
	
	loop();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.draw();
	drawGrid();
}

function drawGrid() {
	ctx.fillStyle = "gray";
	for (var i = 0; i <= GRIDW; ++i) {
		ctx.fillRect(GRIDX + TILES * i, GRIDY, 1, TILES * GRIDH);
	}
	for (var i = 0; i <= GRIDH; ++i) {
		ctx.fillRect(GRIDX, GRIDY + TILES * i, TILES * GRIDW, 1);
	}
}

function loop() {
	requestAnimationFrame(loop);
	checkKeys();
	player.update();
	
	draw();
	lastkd = JSON.parse(JSON.stringify(keysDown));
}

var keysDown = [];
var lastkd = [];
$(document).keydown(function(ev) { 
	if (keysDown.indexOf(ev.keyCode) === -1) {
		keysDown.push(ev.keyCode); 
		console.log("currently pressed keys are " + keysDown + " last keys are: " + lastkd);
	}
	if ([8, 37, 38, 39, 40].indexOf(ev.keyCode) !== -1) {
		ev.preventDefault();
	}
});
$(document).keyup(function(ev) { keysDown.splice(keysDown.indexOf(ev.keyCode), 1) } );

function checkKeys() {
	for (k of keysDown) {
		if (lastkd.indexOf(k) > -1) {
			keyHold(k);
		}
		else {
			keyPress(k);
		}
	}
}

function keyPress(k) {
	
}
function keyHold(k) {
	if (k >= 37 && k <= 40) {
		player.move(k-37);
	}
}

onload = main;