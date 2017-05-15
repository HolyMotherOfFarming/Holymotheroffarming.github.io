var s;
var scl = 20;

var food;

var started = false;

var fR = 20;

var death = Prompt("You scored" + " " + this.total + ". Restart?");

function setup() {
	noLoop();
	
}

function setup2() {
	createCanvas(600, 600);
	s = new Snake();
	pickLocation();
	loop();
	started = true;
}


function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

//function mousePressed() {
	//s.total++;
//}

function draw() {
	if (started) {
		background(51);
	frameRate(fR);

		if (s.eat(food)) {
			pickLocation();
		}
		s.death();
		s.update();
		s.show();

	
		fill(255, 0, 100);
		rect(food.x, food.y, scl, scl);
	}
}

function keyPressed() {
	if (keyCode === 87) {
		s.dir(0, -1);
	} else if (keyCode === 83) {
		s.dir(0, 1);  
	} else if (keyCode === 68) {
		s.dir(1, 0);  
	} else if (keyCode === 65) {
		s.dir(-1, 0);  
	} else if (keyCode === 69) {
		fR += 10
	} else if (keyCode === 81) {
		fR -= 10
	} else if (keyCode === 84) {
		scl -= 5
	} else if (keyCode === 82) {
		scl += 5
	}
}	




//snake.js
function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.eat = function(pos) {
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}

	this.dir = function(x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.death = function() {
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				//console.log('starting over');
				console.log(death);
					if (death = "yes") {
					setup2();	
					} else {
					setup();	
					}
				this.total = 0;
				this.tail = [];
				setup2();
			}
		}
	}
	this.update = function() {
	if (this.total === this.tail.length) {
		for (var i = 0; i < this.tail.length-1; i++) {
			this.tail[i] = this.tail[i+1];
		}
	}
	this.tail[this.total-1] = createVector(this.x, this.y);

	this.x = this.x + this.xspeed*scl;
	this.y = this.y + this.yspeed*scl;
	
	this.x = constrain(this.x, 0, width-scl);
	this.y = constrain(this.y, 0, height-scl);
}

	this.show = function() {
		fill(Math.random()*255, Math.random()*255, Math.random()*255);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
	}
	rect(this.x, this.y, scl, scl);
	}
}
