// keyCodes: http://keycode.info/
let splash;
var sceneNum;
function setup() {
  createCanvas(550, 400);
splash = new Splash();

}

/*function preload() {
edunline = loadFont("Fonts\edunline.tff");
}*/

function draw() {
  splash.update();
  splash.show();
  Switch(32,aksMenu);
}

function mouseClicked() {
  console.log()
  if(sceneNum = 4 && mouseX >= 100 && mouseX <= 0 && mouseY >= 100 && mouseY <= 0) {
    aksInstructions();
  }


}
