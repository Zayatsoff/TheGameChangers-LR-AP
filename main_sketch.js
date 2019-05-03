// keyCodes: http://keycode.info/
let splash;
var sceneNum = 0;
function setup() {
  createCanvas(550, 400);
splash = new Splash();

}

function draw() {
  if (SceneNum === 0) {
  aksMenu();
  }
  
push();
splash.update();
splash.show();
pop();
if(keyCode === 32 && sceneNum >= -1 && sceneNum <=1) {
    aksMenu();
}
}
