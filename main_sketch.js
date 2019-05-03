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
  if (SceneNum === 2) {
    aksInstructions();
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

  //if (SceneNum === 1 && mouse Y)

}
