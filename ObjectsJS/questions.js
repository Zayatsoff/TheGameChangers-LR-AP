class Questions {
  constructor() {
    this.ASM = round(random(1, 3))
    //
    this.P1A = round(random(20, 50));
    this.P2A = round(random(20, 50));
    //
    this.P1S = round(random(50, 90));
    this.P2S = round(random(20, 40));
    //
    this.P1M = round(random(0, 9));
    this.P2M = round(random(0, 9));
    //
    this.AA = this.P1A + this.P2A;
    this.SA = this.P1S - this.P2S;
    this.MA = this.P1M - this.P2M;

  }
  display() {
    background(85, 105, 137);
    if (this.ASM === 1) {
    this.add();
    }

    if (this.ASM === 2) {
    this.sub();
    }

    if (this.ASM === 3) {
    this.mult();
    }

  }

  add() {
    fill(255);
    textSize(50)
    text(this.P1A + ' + ' + this.P2A + ' = ', 165, 100);
  }
  sub() {
    fill(255);
    textSize(50)
    text(this.P1S + ' - ' + this.P2S + ' = ', 165, 100);
  }
  mult() {
    fill(255);
    textSize(50)
    text(this.P1M + ' x ' + this.P2M + ' = ', 185, 100);
  }



}
