// keyCodes: http://keycode.info/
let splash ;
var cod = 0;
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
  Switch(32,aksMenu, 1);
function mouseclicked() {
  SwitchClick(300,200,300,200,aksMenuInstructions);
}
  //SwitchClick(300,200,300,200,aksInstructions);
}
