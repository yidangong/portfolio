var ships;

function Airship() {
	this.x = random(100, 600);
	this.y = random(100, 600);
	this.fillColor = color(random(255), random(255), random(255));

	this.move = function() {
	  this.x += random(5, 10);
		if (this.x > width + 50)
			this.x = 0;
	};

	this.show = function() {
		fill("orange");
		quad(
			this.x - 75, this.y - 35,
			this.x - 70, this.y - 10,
			this.x - 15, this.y - 10,
			this.x - 60, this.y - 35
		);
		quad(
			this.x - 75, this.y + 35,
			this.x - 70, this.y + 10,
			this.x - 15, this.y + 10,
			this.x - 60, this.y + 35
		);
		quad(
			this.x - 10, this.y + 30,
			this.x - 5,  this.y + 45,
			this.x + 35, this.y + 45,
			this.x + 40, this.y + 30
		);
		
		strokeWeight(3);
		stroke("orange");
		line(this.x - 20, this.y + 20, this.x - 10, this.y + 30);
		line(this.x, this.y + 20, this.x + 5, this.y + 30);
		line(this.x + 25, this.y + 20, this.x + 20, this.y + 30);
		line(this.x + 50, this.y + 5, this.x + 37, this.y + 30);
		
		noStroke();
		// fill("lightpink");
		fill(this.fillColor);
		ellipse(this.x, this.y, 150, 50);
		fill("orange");
		rect(this.x - 85, this.y - 2.5, 50, 5);
	};
}

function setup() {
	frameRate(5);
	createCanvas(700, 600);
	
	ships = new Array(5);
	for (var i = 0; i < 5; i++)
		ships[i] = new Airship();
}

function draw() {
	daytime();
	if (mouseX > 350)
		nighttime();
	
	for (var i = 0; i < ships.length; i++) {
		ships[i].move();
		ships[i].show();
	}
}

function daytime() {
	background ("lightblue");
	fill("white");
	ellipse(50,60,40);
	ellipse(80,60,55);
	ellipse(100,60,40);
	ellipse(300,70,60);
	ellipse(340,70,60);
	ellipse(370,70,45);
	ellipse(160,120,40);
	ellipse(190,120,55);
	ellipse(210,120,40);
	
	strokeWeight(3);
	stroke("yellow");
	var sun_x = 570;
	var sun_y = 80;
	line(sun_x - 60, sun_y, sun_x + 60, sun_y);
	line(sun_x, sun_y - 60, sun_x, sun_y + 60);
	line(sun_x - 42, sun_y - 42, sun_x + 42, sun_y + 42);
	line(sun_x + 42, sun_y - 42, sun_x - 42, sun_y + 42);
	
	noStroke();
	fill("red");
	ellipse(570,80,70);
	fill("white");
	ellipse(500,120,40);
	ellipse(530,120,55);
	ellipse(550,120,40);
}

function nighttime() {
	background("darkblue");
	
	fill("yellow");
	ellipse(500, 100, 70);
	fill("white");

	ellipse(40, 50, random(2, 8));
	ellipse(120, 100, random(2, 6));
	ellipse(80, 150, random(2, 9));
	ellipse(200, 70, random(2, 3));
	ellipse(500, 40, random(2, 8));
	ellipse(300, 50, random(2, 10));
	ellipse(400, 80, random(2, 6));
	ellipse(250, 90, random(2, 8));
	ellipse(350, 110, random(2, 5));
	ellipse(600, 70, random(2, 7));
	ellipse(200, 130, random(2, 5));
	ellipse(280, 170, random(2, 10));
	ellipse(420, 150, random(2, 8));
}

function keyPressed() {
	for (var i = 0; i < 5; i++) {
		if (keyCode === RIGHT_ARROW) {
			ships[i].x = ships[i].x + 10;
		} else if (keyCode === LEFT_ARROW) {
			ships[i].x = ships[i].x - 10;
		} else if (keyCode === UP_ARROW) {
			ships[i].y = ships[i].y - 10;
		} else if (keyCode === DOWN_ARROW) {
			ships[i].y = ships[i].y + 10;
		}
	}
}