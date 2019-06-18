class Coin {
  constructor() {
    this.co = random(0, 100);
    this.r = 40;
    this.x = random(0, width - this.r);
    this.y = 300 - random(100, 2500);
  }
  display() {

    if (this.co >= 97) {
      image(coin5, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 96 && this.co >= 90) {
      image(coin4, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 89 && this.co >= 80) {
      image(coin3, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 79 && this.co >= 51) {
      image(coin2, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 50) {
      image(coin1, this.x, this.y, this.r, this.r);
    }

  }

}
