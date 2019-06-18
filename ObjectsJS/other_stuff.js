//////////////////////////////
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
//////////////////////////////

//////////////////////////////
function backgroundColour() {
  if (bgColour === 1) {
    background(mouseX - 100, mouseY - 100, 200);
  } else {
    image(bgIMG, -30, 0, 800, 600);
  }
}
//////////////////////////////
function Leaf() {
  this.x = random(-100, width);
  this.y = random(-100, height);
  this.w = random(5, 10);
  this.h = random(2, 7);
  this.alpha = 255;
  this.g = random(100, 255)
  this.time = 100;
  this.addY = random(2, 5)
  this.addX = random(1, 2)

  this.display = function() {
    noStroke();
    fill(50, this.g, 0, this.alpha * (this.time / 100));
    ellipse(this.x, this.y, this.w, this.h);
  }

  this.update = function() {
    this.time--
    if (this.x >= width) {
      this.x = random(0, width);
      this.time = 100;
    }
    if (this.y >= height) {
      this.y = random(0, height);
      this.time = 100;
    }
  }

  this.edge = function() {
    this.x += this.addX;
    this.y += this.addY;
  }
}
//////////////////////////////
function LeafsFalling() {
  for (var i = 0; i <= numLeaf; i++) {
    leaf[i].display();
    leaf[i].update();
    leaf[i].edge();
  }
}
//////////////////////////////
