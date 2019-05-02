class Splash {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 40;
    this.spacebar = 30;
    this.GO_UP = 1;
  }

  show() {
    background(220, 244, 240);

    //this.x = width /2;
    //this.y = height/2;
    /// Main_Text
    textSize(this.size);
    //textFont(edunline);
    fill(0);
    textAlign(CENTER);
    text('Jump or thump!', this.x, this.y);

    textSize(this.spacebar);
    //textFont(edunline);
    fill(0);
    textAlign(CENTER);
    text('Press "Space" to start', this.x, this.y + 60);

  }
  update() {
    this.size += this.GO_UP;
    if (this.size < 40 || this.size > 70) {
      this.GO_UP *= -1;
    }
  }
}
