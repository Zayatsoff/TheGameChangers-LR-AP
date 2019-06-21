class Splash {

  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 40;
    this.spacebar = 30;
    this.GO_UP = 1;
  }

  show() {

    SceneNum = 0;
    background(220, 244, 240);

    //this.x = width /2;
    //this.y = height/2;
    /// Main_Text
    textSize(this.size);
    //textFont(edunline);
    fill(0);
    textAlign(CENTER);
    text('Jump or thump!', this.x, this.y - 105);

    textSize(this.spacebar);
    //textFont(edunline);
    fill(0);
    textAlign(CENTER);
    text('Press "Space" to start', this.x, this.y + 60);
    textSize(10);
    text('Made by', width - 100, 320);
    image(gameLogo, width - 100, 300, 100, 100);
  }
  update() {
    SceneNum = 0;
    this.size += this.GO_UP;
    if (this.size < 40 || this.size > 70) {
      this.GO_UP *= -1;
    }
  }
}

function playDev() {
  console.log(player.y);
  SceneNum = 7;
  push();
  translate(0, -player.y + height - player.h * 2);
  image(level1bg, 0, height - 3230);
  if (player.y <= -1000) {
    SceneNum = 9;
    aksLvl1Win();
  
  }

  // if (player.y <= -1000 && player.y >= -1005 ) {
  //   questions.display();
  // }


  player.update();

  if (keyIsDown(68)) {
    player.rightMovement();
  }
  if (keyIsDown(65)) {
    player.leftMovement();
  }

  for (var i = 0; i < plat.length; i++) {
    plat[i].display();
    player.CollidePlat(i);
  }
  for (var i = 0; i < coin.length; i++) {

    player.CollideCoin(i);
  }

  for (var i = 0; i < coin.length; i++) {
    coin[i].display();
  }

  player.display();
  pop();
  fill(0);
  textSize(20)
  text(money + "$", 30, height - 30)
}
/////////////////////////////////
function playDev2() {
  SceneNum = 10;
  push();
  translate(0, -player.y + height - player.h * 2);
  image(level2bg, 0, height - 3230);
  if (player.y <= -2580) {
    SceneNum = 11;
    akslvl2Win();
  }

  player.update();


  if (keyIsDown(68)) {
    player.rightMovement();
  }
  if (keyIsDown(65)) {
    player.leftMovement();
  }

  for (var i = 0; i < plat.length; i++) {
    plat[i].display();
    player.CollidePlat(i);
  }
  for (var i = 0; i < coin.length; i++) {

    player.CollideCoin(i);
  }

  for (var i = 0; i < coin.length; i++) {
    coin[i].display();
  }

  player.display();
  pop();
  fill(255);
  textSize(20)
  text(money + "$", 30, height - 30)
}

function keyPressed() {
  if (keyCode === 87 && player.jumped === false) {
    player.jump();
    player.jumped = true;
  }
  if (SceneNum === 7 && keyCode === 75) {
    player.y -= 200;
  }

  if (SceneNum === 10 && keyCode === 75) {
    player.y -= 200;
  }

  if (player.velocity >= 0) {
    player.jumped = false;
  }
}
