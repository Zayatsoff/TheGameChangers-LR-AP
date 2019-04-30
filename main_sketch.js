// keyCodes: http://keycode.info/
let splash ;

function setup() {
  createCanvas(550, 400);
splash= new Splash();

}

/*function preload() {
edunline = loadFont("Fonts\edunline.tff");
}*/
function draw() {
  splash.update();
  splash.show();
  Switch(32,aksMenu);
  Switch(81 ,aksInstructions);
}
