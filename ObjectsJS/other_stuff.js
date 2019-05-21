function Confetti() {
  this.x = random(0, 550);
  this.y = random(-100, 500);
  this.height = random(5, 13);
  this.width = random(2, 8);
  this.rgb1 = random(0, 255);
  this.rgb2 = random(0, 255);
  this.rgb3 = random(0, 255);
  this.speed = random(-10, 20);


  this.display = function() {
    noStroke();
    fill(this.rgb1, this.rgb2, this.rgb3);
    rect(this.x, this.y, this.width, this.height);
  }
  this.update = function() {
    this.y += this.speed;
    if (this.y > 550) {
      this.y = random(-100, 0);
    }
    if (this.y < 0) {
      this.y = random(400, 500);
    }
  }
}

function Player() {
  this.y = height - 20;
  this.x = width / 2;

  this.gravity = 0.6;
  this.velocity = 0;
  this.jumpForce = -15;
  this.speed = 4;

  this.display = function() {
    fill(122, 255, 0, 80);
    stroke(255)
    strokeWeight(2)
    rect(this.x, this.y, 30, -50);
  }

  this.jump = function() {
    this.velocity += this.jumpForce;
  }

  this.update = function() {

    this.velocity += this.gravity;
    this.y += this.velocity;
    // ground detection (?)
    if (this.y > height - 20) {
      this.y = height - 20;
      this.velocity = 0;
    }
    if (keyIsPressed === false) {
      this.speed = 4
    }

  }

  th is.rightMovement = function() {
    this.x += this.speed;
    if (keyIsDown(68)) {
      this.speed += 0.1;
    } else {
      this.speed = 4
    }
  }

  this.leftMovement = function() {
    this.x -= this.speed;
    if (keyIsDown(65)) {
      this.speed += 0.2;

    }
  }
  // && keyIsDown(65)?
  this.edge = function() {
    if (this.x <= 20 || this.x >= width - 45) {
      this.speed = -1;
    }

    if (this.x <= 15) {
      this.x = 20;
    }

    if (this.x >= width - 43) {
      this.x = width - 45;
    }
  }

  this.playerTouch = function() {
    if (player.x <= 27 || this.x >= width - 50) {
      return true
    } else {
      return false
    }
  }
}



function playDev() {
  this.rgb1 = player.x / 3;
  this.rgb2 = player.y / 3;

  background(this.rgb1, 53, this.rgb2);
  fill(0, 0, 0, 90);
  rect(0, 0, width, height)
  player.display();
  player.update();
  if (keyIsDown(68)) {
    player.rightMovement();
  }
  if (keyIsDown(65)) {
    player.leftMovement();
  }
  player.edge();
}



function keyPressed() {
  if (player.y > height - 21 && player.playerTouch() === false && keyCode === 87) {
    player.jump();
  }

  if (player.playerTouch() === true && keyCode === 87) {
    player.jump();
  }


}

function backgroundColour() {
  if (bgColour === 1) {
    background(mouseX - 100, mouseY - 100, 200);
  } else {
    image(bgIMG, -30, 0, 800, 600);

  }
}
