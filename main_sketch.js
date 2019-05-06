// keyCodes: http://keycode.info/
let splash;
var SceneNum = 0;

function setup() {
  createCanvas(550, 400);
  splash = new Splash();
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

  else {
    push();
    splash.update();
    splash.show();
    pop();
    if (keyCode === 32 && SceneNum === 0) {
      aksMenu();
    }
  }

}

function mouseClicked() {
  if (SceneNum === 1 && mouseX >= 180 && mouseX <= 335 && mouseY >= 255 && mouseY <= 295) {
    aksInstructions();
    SceneNum = 2;
  }
  if (SceneNum === 2 && mouseX >= 30 && mouseX <= 90 && mouseY >= 325 && mouseY <= 375) {
    aksMenu();
      SceneNum = 1;
  }
  if (SceneNum === 1 && mouseX >= 215 && mouseX <= 385 && mouseY >= 330 && mouseY <= 370) {
    aksPlayScreen();
  SceneNum = 3;
  }

}
