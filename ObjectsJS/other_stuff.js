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
