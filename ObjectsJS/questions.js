class Questions {
  constructor() {
    this.ASM = round(random(1, 3));
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
    //
    this.A = [this.AA, this.AA + 15, this.AA - 30];
    this.S = [this.SA, this.SA + 15, this.SA - 30];
    this.M = [this.MA, this.MA + 5, this.MA - 6];
  }

  display() {
    SceneNum = 12;
    background(85, 105, 137);
    if (this.ASM === 1) {
      this.add();
      this.butt();
      this.textA(this.A)
      quest = 1;

    }

    if (this.ASM === 2) {
      this.sub();
      this.butt();
      this.textS(this.S)
      quest = 2;

    }
    if (this.ASM === 3) {
      this.mult();
      this.butt();
      this.textM(this.M)
      quest = 3;

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
  butt() {
    noStroke();
    fill(133, 167, 221);
    for (var i = 1; i <= 3; i++) {
      rect(150 * i - 70, height / 2, 100, 50, 12)
    }
  }

  textA(txt) {
   fill(255);

    text(txt[1], 150  - 50, 245, 50);
    text(txt[0], 300 - 50, 245, 50);
    text(txt[2], 450 - 50,245, 50) ;
  }

  textS(txt) {
   fill(255);
    text(txt[2], 150  - 50, 245, 50);
    text(txt[1], 300 - 50, 245, 50);
    text(txt[0], 450 - 50,245, 50) ;
  }

  textM(txt) {
   fill(255);

    text(txt[0], 150  - 50, 245, 50);
    text(txt[2], 300 - 50, 245, 50);
    text(txt[1], 450 - 50,245, 50) ;
  }

}
