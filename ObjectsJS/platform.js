class Plat {
  constructor(i) {
    this.w = random(80, 150);
    this.h = 15;
    this.x = random(0, width - this.w);
    this.y = 300 - i * 100;
  }
  display() {
    fill(0);
    rect(this.x, this.y, this.w, this.h, 5)
  }

}

class Ground {
  constructor() {
    this.w = width;
    this.h = 50;
    this.x = 0;
    this.y = height;
  }
  display() {
    fill(0,0,0,0);
    rect(this.x, this.y, this.w, this.h, 5)
  }

}
