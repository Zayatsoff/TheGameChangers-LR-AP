// keyCodes: http://keycode.info/
let splash;
let overBox = 100;

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
  SwitchClick(0,10,0,50,1);

}

function mouseClicked() {
  if (cod = 1) {
    aksInstructions();

  }

}
