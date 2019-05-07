// keyCodes: http://keycode.info/
let splash;
var confet = [];
var SceneNum = 0;

function setup() {
  createCanvas(550, 400);
  splash = new Splash();
  for (var i = 0; i < 500; i++) {
    confet[i] = new Confetti();
  }
}

function draw() {
  if (SceneNum === 1) {
    aksMenu();
  }
  else if (SceneNum === 2) {
    aksInstructions();
  }
  else if (SceneNum === 3) {
    aksPlayScreen();
  }
  else if (SceneNum === 6) {
    aksAboutUs();
  }


  else {
    push();
    splash.update();
    splash.show();
    pop();
    if (keyCode === 32 && SceneNum === 0) {
      aksMenu();
    }
  }


  // aksCorrect();
  // for (var i = 0; i < 500; i++) {
  //   confet[i].display();
  //   confet[i].update();
  // }
}

function mouseClicked() {
  if (SceneNum === 1 && mouseX >= 180 && mouseX <= 335 && mouseY >= 255 && mouseY <= 295) {
    aksInstructions();
    SceneNum = 2;
  }
  else if (SceneNum === 2 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
      SceneNum = 1;
  }
  else if (SceneNum === 1 && mouseX >= 215 && mouseX <= 385 && mouseY >= 330 && mouseY <= 370) {
    aksPlayScreen();
    SceneNum = 3;
  }
  else if (SceneNum === 1 && mouseX >= 15 && mouseX <= 135 && mouseY >= 205-5 && mouseY <= 235) {
    aksAboutUs();
    SceneNum = 6;
  }
  else if (SceneNum === 6 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
      SceneNum = 1;
  }
}
