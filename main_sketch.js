// keyCodes: http://keycode.info/

//Variables
let splash;
var confet = [];
var SceneNum = 0;

function setup() {
  createCanvas(550, 400);
  //splash screen
  splash = new Splash();
  //confetti
  for (var i = 0; i < 500; i++) {
    confet[i] = new Confetti();
  }
}

function draw() {
  //Menu
  if (SceneNum === 1) {
    aksMenu();
  }
  //Instructions
  else if (SceneNum === 2) {
    aksInstructions();
  }
  //Play Screen1
  else if (SceneNum === 3) {
    aksPlayScreen();
  }
  //About us
  else if (SceneNum === 6) {
    aksAboutUs();
  }

  //Splash
  else {
    push();
    splash.update();
    splash.show();
    pop();
    if (keyCode === 32 && SceneNum === 0) {
      aksMenu();
    }
  }

  //Cofetti
  // aksCorrect();
  // for (var i = 0; i < 500; i++) {
  //   confet[i].display();
  //   confet[i].update();
  // }
}

function mouseClicked() {
  //Open Instructions from Menu
  if (SceneNum === 1 && mouseX >= 180 && mouseX <= 335 && mouseY >= 255 && mouseY <= 295) {
    aksInstructions();
    SceneNum = 2;
  }
  //Back to Menu from Instructions
  else if (SceneNum === 2 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
    SceneNum = 1;
  }
  //Open Play screen from Menu
  else if (SceneNum === 1 && mouseX >= 215 && mouseX <= 385 && mouseY >= 330 && mouseY <= 370) {
    aksPlayScreen();
    SceneNum = 3;
  }
  //Open About us screen from Menu
  else if (SceneNum === 1 && mouseX >= 15 && mouseX <= 135 && mouseY >= 205 - 5 && mouseY <= 235) {
    aksAboutUs();
    SceneNum = 6;
  }
  //Back to Menu from Instructions
  else if (SceneNum === 6 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
    SceneNum = 1;
  }
}
