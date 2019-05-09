var player;
var numberOfTheKey = 0;
var gravity = 0.1;

function Player() {
  //variables
  this.x = 40;
  this.y = height - 20;
  this.speed = 4;
  this.vel = 1.5
  this.acc = 0
  this.mass = 8;
  this.jump = 0;

  //dispalay the player
  this.display = function() {
    fill(95, 110, 220);
    stroke(255);
    rect(this.x, this.y - 50, 20, 50);
  };
  //update the player's movement
  this.move = function() {
    //right movement
    if (numberOfTheKey === 68 && this.x <= 520) {
      this.x += this.speed;
    }
    //left movement
    if (numberOfTheKey === 65 && this.x >= 5) {
      this.x -= this.speed;
    }
  }

  this.applyForce = function(force) {
    this.acc += force;
  }

  this.update = function() {
    this.vel += this.acc;
    this.y -= this.vel;
    this.acc = 0;
  }
  this.edges = function() {
    if (this.y > 380) {
      this.vel *= 0;
      this.y = 380;

    }
  }
}



function keyPressed() {

   if (keyCode === 68) {
    numberOfTheKey = 68;
  }
  //left key check
  if (keyCode === 65) {
    numberOfTheKey = 65;
  }
  //space key check
  if (keyCode === 32 && player.y >= 370) {
    var jump = 4;
    player.applyForce(jump);
  }

  if ( player.x <= 30 || player.x >= 500 && keyCode === 32 && player.y <= 370) {
    var jump = 2;
    player.applyForce(jump);

  }
}

function setup() {
  createCanvas(550, 400);
  player = new Player();

}


function draw() {
  //changes nubmer of the key
  if (keyIsPressed === false) {
    numberOfTheKey = 0;

  }

  background(15);
  player.display();
  player.move();
  var gravity = -0.1;
  player.applyForce(gravity);
  if (mouseIsPressed) {
    var force = -0.5;
    player.applyForce(force);
  }

  player.update();
  player.edges();
  player.display();

}
