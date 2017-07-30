function Player() {
	this.x = base.x;
	this.y = base.y;
	this.moveInterval = 30;
	this.lastMove = 0;
	this.move = function(dir) {
		if (this.lastMove >= this.moveInterval) {
			this.lastMove = 0;
			var x = this.x;
			var y = this.y;
			// left up right down
			if (dir % 2) {
				y = this.y + dir - 2;
			}
			else {
				x = this.x + dir - 1; 
			}
			if (x >= 0 && x < GRIDW && y >= 0 && y < GRIDH) {
				this.x = x;
				this.y = y;
			}
		}
	}
	this.draw = function() {
		ctx.fillStyle = "red";
		ctx.fillRect(GRIDX + this.x * TILES, GRIDY + this.y * TILES, TILES, TILES);
		
	}
	this.update = function() {
		++this.lastMove;
	}
}