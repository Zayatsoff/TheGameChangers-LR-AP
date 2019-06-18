class Coin {
  constructor() {
    this.co = random(0, 100);
    this.r = 40;
    this.x = random(0, width - this.r);
    this.y = 300 - random(100, 2500);
    this.visible = true;
  }
  display() {

    if (this.co >= 97 && this.visible === true) {
      image(coin5, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 96 && this.co >= 90&& this.visible === true) {
      image(coin4, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 89 && this.co >= 80&& this.visible === true) {
      image(coin3, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 79 && this.co >= 51&& this.visible === true) {
      image(coin2, this.x, this.y, this.r, this.r);
    }
    if (this.co <= 50&& this.visible === true) {
      image(coin1, this.x, this.y, this.r, this.r);
    }
if(this.visible === false) {
  this.x += 400;
}
  }

}
