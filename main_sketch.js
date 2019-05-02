// keyCodes: http://keycode.info/
let splash;
var sceneNum = 0;
function setup() {
  createCanvas(550, 400);
splash = new Splash();

}

/*function preload() {
edunline = loadFont("Fonts\edunline.tff");
}*/

function draw() {
  push();
 splash.update();
splash.show();
pop();
if(keyCode === 32 && sceneNum >= -1 && sceneNum <=0) {
    aksMenu();
}
}

function mouseClicked() {
  console.log(sceneNum)
  if(mouseX >= 180 && mouseX <= 235 && mouseY >= 2 && mouseY <= 275) {
    aksInstructions();
  }


}
